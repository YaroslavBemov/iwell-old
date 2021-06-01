<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/articles",
     *      operationId="getArticles",
     *      tags={"article"},
     *      summary="Get all articles",
     *      description="Get list of all articles or articles by user id if it is in query parameters",
     *     @OA\Parameter(
     *          name="token",
     *          description="Access token",
     *          required=true,
     *          in="query",
     *      ),
     *     @OA\Parameter(
     *          name="userId",
     *          description="User id",
     *          required=false,
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
        $validator = Validator::make($request->only('user_id'), [
            'user_id' => 'integer'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $userId = $request->only('user_id');
        $user = User::find($userId)->first();

        if ($user) {
            $articles = Article::where('user_id', $userId)
                ->orderBy('created_at', 'desc')
                ->get();

            return response($articles, 200);
        }

        $articles = Article::where('deleted_at', null)
            ->orderBy('created_at', 'desc')
            ->get();

        return response($articles, 200);
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
     * @param \App\Models\Article $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Article $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Article $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }
}
