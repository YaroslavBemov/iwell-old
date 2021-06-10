<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/skills",
     *      operationId="getSkills",
     *      tags={"coach"},
     *      summary="Get all skills",
     *      description="Get list of all skills",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function index()
    {
        $skills = Skill::all();

        return response($skills, 200);
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
     * @OA\Get(
     *      path="/api/skills/{id}",
     *      operationId="getSkill",
     *      tags={"coach"},
     *      summary="Get skill by id",
     *      description="Get skill",
     *     @OA\Parameter(
     *          name="skillId",
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
    public function show(Skill $skill)
    {
        return response($skill, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Skill $skill)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function destroy(Skill $skill)
    {
        //
    }
}
