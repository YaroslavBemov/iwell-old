<?php

namespace App\Http\Controllers;

use App\Models\CoachSkill;
use Illuminate\Http\Request;

class CoachSkillController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/coach-skills",
     *      operationId="getCoachSkills",
     *      tags={"coach"},
     *      summary="Get all approved coach skills",
     *      description="Get list of all approved Coach Skills",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function index()
    {
        // TODO coach skills, soft delete
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CoachSkill  $coachSkill
     * @return \Illuminate\Http\Response
     */
    public function show(CoachSkill $coachSkill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CoachSkill  $coachSkill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CoachSkill $coachSkill)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CoachSkill  $coachSkill
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoachSkill $coachSkill)
    {
        //
    }
}
