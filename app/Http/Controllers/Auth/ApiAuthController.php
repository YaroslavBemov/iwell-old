<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\RegisterFormRequest;
use App\Models\Coach;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

//TODO middleware с проверкой ключа приложения
class ApiAuthController extends Controller
{
    /**
     * @OA\Post(
     *      path="/api/register",
     *      operationId="register",
     *      tags={"user"},
     *      summary="Create new user",
     *      description="Create new user and return details",
     *     @OA\Parameter(
     *          name="email",
     *          description="User email",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="password",
     *          description="User password",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="first_name",
     *          description="User first_name",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="last_name",
     *          description="User last_name",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="remember_token",
     *          description="User remember_token",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="birthday",
     *          description="User birthday",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="gender",
     *          description="User gender",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="hometown_id",
     *          description="User hometown_id",
     *          required=false,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function register(RegisterFormRequest $request)
    {
        $user = User::create(array_merge(
            $request->all(),
            ['password' => bcrypt($request->password)]
        ));
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $user->access_token = $token;

        return response($user, 200);
    }

    /**
     * @OA\Post(
     *      path="/api/signin",
     *      operationId="signin",
     *      tags={"user"},
     *      summary="signin",
     *      description="return user info and token",
     *     @OA\Parameter(
     *          name="email",
     *          description="User email",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="password",
     *          description="User password",
     *          required=true,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function signIn(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {

            //TODO нужно ли проверять что у юзера есть активные токены?
            $token = auth()->user()->createToken('Laravel Password Grant Client')->accessToken;
            $user = auth()->user();
            $user->access_token = $token;

            $coach = Coach::where('user_id', $user->id)->get();
            if ($coach->count()) {
                $response = array_merge(
                    ['user' => $user],
                    ['coach' => $coach]
                );

                return response($response, 200);
            }

            return response($user, 200);
        } else {

            return response(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * @OA\Post(
     *      path="/api/signout",
     *      operationId="signout",
     *      tags={"user"},
     *      summary="signout",
     *      description="revoke user token",
     *     @OA\Parameter(
     *          name="token",
     *          description="User token",
     *          required=true,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function signOut(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];

        return response($response, 200);
    }
}
