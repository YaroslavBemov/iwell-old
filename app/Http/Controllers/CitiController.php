<?php

namespace App\Http\Controllers;

use App\Models\Citi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CitiController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/cities",
     *      operationId="getCities",
     *      tags={"citi"},
     *      summary="Get all cities",
     *      description="Get list of all cities",
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
        $cities = Citi::all();

        return response($cities, 200);
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
     *      path="/api/cities/{id}",
     *      operationId="getCiti",
     *      tags={"citi"},
     *      summary="Get citi by id",
     *      description="Get one citi by id",
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
    public function show(Request $request)
    {
        $validator = Validator::make($request->only('id'), [
            'user_id' => 'integer'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $id = $request->only('id');

        $citi = Citi::find($id)->first();

        return response($citi, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Citi  $citi
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Citi $citi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Citi  $citi
     * @return \Illuminate\Http\Response
     */
    public function destroy(Citi $citi)
    {
        //
    }
}
