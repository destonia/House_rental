<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories, 200);
    }

    public function create(Request $request)
    {
        $category = new Category;
        $category->name = $request->name;
        $category->save();
        // return response()->json($request->value);
    }
}
