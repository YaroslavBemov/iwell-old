<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
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
        $validator = Validator::make($request->only('title', 'body'), [
            'title' => 'required|string|max:50',
            'body' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $userId = $request->user()->id;

        $article = Article::create(array_merge(
            $request->only('title', 'body'),
            ['user_id' => $userId]
        ));

        return response($article, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Article $article
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $validator = Validator::make($id, [
            'id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
//TODO show
        return response($request->only('id'), 222);
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
