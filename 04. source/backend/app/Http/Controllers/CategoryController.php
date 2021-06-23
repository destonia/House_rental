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
    public function findById($id){
        $category = Category::findOrFail($id);
        return response()->json($category, 200);
    }

    public function update($id, Request $request){
        $category = Category::findOrFail($id);
        $category->fill($request->all());
        $category->save();
        return response()->json($category);
    }

    public function delete($id){
        $category = Category::findOrFail($id);
        $category->delete();
    }
}
