<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\CoachSkill;
use App\Models\Schedule;
use App\Models\Skill;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    /**
     * @OA\Get(
     *      path="/schedule",
     *      operationId="getSchedule",
     *      tags={"coach"},
     *      summary="Get all schedule",
     *      description="Get list of all schedule",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function index()
    {
        $schedule = Schedule::with('coachSkill.coach.user:id,first_name,last_name',
            'coachSkill.skill')
            ->get();

        return response($schedule, 200);
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
     * @OA\Get(
     *      path="/schedule/{id}",
     *      operationId="getScheduleById",
     *      tags={"coach"},
     *      summary="Get schedule by id",
     *      description="Get schedule by id",
     *     @OA\Parameter(
     *          name="scheduleId",
     *          description="Schedule id",
     *          required=true,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function show(Schedule $schedule)
    {
        $schedule->coachSkill->coach->user->only('first_name', 'last_name');
        $schedule->coachSkill->skill;

        return response($schedule, 200);
    }

    /**
     * @OA\Get(
     *      path="/schedule/{id}",
     *      operationId="getScheduleByCoachId",
     *      tags={"coach"},
     *      summary="Get schedule by Coach id",
     *      description="Get schedule by Coach id",
     *     @OA\Parameter(
     *          name="coachId",
     *          description="coach id",
     *          required=true,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function showByCoach(Coach $coach)
    {
        $coach->schedule;

        return response($coach, 200);
    }

    /**
     * @OA\Get(
     *      path="/schedule/{id}",
     *      operationId="getScheduleBySkillId",
     *      tags={"coach"},
     *      summary="Get schedule by Skill id",
     *      description="Get schedule by Skill id",
     *     @OA\Parameter(
     *          name="SkillId",
     *          description="Skill id",
     *          required=true,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function showBySkill(Skill $skill)
    {
        $skill->schedule;

        return response($skill, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
