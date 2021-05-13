<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\RegisterFormRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
//TODO middleware с проверкой ключа приложения
class ApiAuthController extends Controller
{
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

            //TODO Is it bad way?
            $user->access_token = $token;

            return response($user, 200);
        } else {
            return response(['error' => 'Unauthorised'], 401);
        }
    }

    public function signOut(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];

        return response($response, 200);
    }
}
