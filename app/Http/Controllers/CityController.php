<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use function PHPUnit\Framework\isEmpty;

class CityController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/cities",
     *      operationId="getCities",
     *      tags={"city"},
     *      summary="Get all cities",
     *      description="Get list of all cities",
     *     @OA\Parameter(
     *          name="starts",
     *          description="First letters of city name, min 2, max 6 characters",
     *          required=true,
     *          in="query",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *     )
     */
    public function index(Request $request)
    {
        $validator = Validator::make($request->only('starts'), [
            'starts' => 'string|min:2|max:6'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $starts = $request->only('starts');

        if (!empty($starts)) {
            $starts = implode('', $request->only('starts'));
            $cities = DB::table('cities')
                ->where('title_ru', 'like', "$starts%")
                ->get();

            return response($cities, 200);
        }

// ~30MB
//        $cities = DB::table('cities')
//            ->select(['id', 'title_ru', 'region_ru'])
//            ->get();

        return response()->noContent();
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
     *      path="/api/cities/{id}",
     *      operationId="getCity",
     *      tags={"city"},
     *      summary="Get city by id",
     *      description="Get one city by id",
     *     @OA\Parameter(
     *          name="id",
     *          description="City id",
     *          required=true,
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
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\City $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\City $city
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        //
    }
}
