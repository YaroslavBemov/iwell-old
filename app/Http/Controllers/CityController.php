<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CityController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/cities",
     *      operationId="getCities",
     *      tags={"city"},
     *      summary="Get all cities",
     *      description="Get list of all cities",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function index()
    {
        $cities = City::all();

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
     *      operationId="getCity",
     *      tags={"city"},
     *      summary="Get city by id",
     *      description="Get one city by id",
     *     @OA\Parameter(
     *          name="id",
     *          description="City id",
     *          required=false,
     *          in="path",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function show(City $city)
    {
//            $validator = Validator::make($request->only('id'), [
//            'id' => 'integer'
//        ]);
//
//        if ($validator->fails()) {
//            return response(['errors' => $validator->errors()->all()], 422);
//        }

//        $id = $request->only('id');

//        $city = City::find($city)->first();

        return response($city, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        //
    }
}
