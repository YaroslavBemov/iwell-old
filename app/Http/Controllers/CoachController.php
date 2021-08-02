<?php

namespace App\Http\Controllers;

use App\Http\Requests\Api\RegisterFormRequest;
use App\Models\Coach;
use App\Models\CoachSkill;
use App\Models\User;
use Illuminate\Http\Request;

class CoachController extends Controller
{
    /**
     * @OA\Post(
     *      path="/api/register/coach",
     *      operationId="registerCoach",
     *      tags={"coach"},
     *      summary="Create new coach",
     *      description="Create new coach and return details",
     *     @OA\Parameter(
     *          name="email",
     *          description="Coach email",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="password",
     *          description="Coach password",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="first_name",
     *          description="Coach first_name",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="last_name",
     *          description="Coach last_name",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="remember_token",
     *          description="Coach remember_token",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="birthday",
     *          description="Coach birthday",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="gender",
     *          description="Coach gender",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="hometown_id",
     *          description="Coach hometown_id",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="achieve",
     *          description="Coach achieve",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="rank",
     *          description="Coach rank",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="about",
     *          description="Coach about",
     *          required=false,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="skill_id",
     *          description="Coach skill_id",
     *          required=true,
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
            $request->only(
                'email',
                'remember_token',
                'first_name',
                'last_name',
                'birthday',
                'gender',
                'avatar',
                'hometown_id'
            ),
            ['password' => bcrypt($request->password)]
        ));
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $user->access_token = $token;

        $coach = Coach::create(array_merge(
            $request->only(
                'achieve',
                'rank',
                'about'
            ),
            ['user_id' => $user->id]
        ));

        $coachSkill = CoachSkill::create(array_merge(
            $request->only('skill_id'),
            ['coach_id' => $coach->id]
        ));

        $response = array_merge(array($user), array($coach), array($coachSkill));

        return response($response, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Coach $coach
     * @return \Illuminate\Http\Response
     */
    public function show(Coach $coach)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Coach $coach
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Coach $coach)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Coach $coach
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coach $coach)
    {
        //
    }
}
