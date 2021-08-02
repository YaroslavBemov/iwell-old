<?php

namespace App\Http\Controllers;

use App\Models\SkillType;
use Illuminate\Http\Request;

class SkillTypeController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/skill-types",
     *      operationId="getSkillTypes",
     *      tags={"coach"},
     *      summary="Get all Skill Types",
     *      description="Get list of all Skill Types",
     *     @OA\Parameter(
     *          name="token",
     *          description="Access token",
     *          required=true,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function index()
    {
        $types = SkillType::all();

        return response($types, 200);
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
     * @param  \App\Models\SkillType  $skillType
     * @return \Illuminate\Http\Response
     */
    public function show(SkillType $skillType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SkillType  $skillType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SkillType $skillType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SkillType  $skillType
     * @return \Illuminate\Http\Response
     */
    public function destroy(SkillType $skillType)
    {
        //
    }
}
