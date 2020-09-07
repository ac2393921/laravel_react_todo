<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\Services\TodoService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CreateController extends Controller
{
    /**
     * Todoを作成し、結果をJsonで渡す
     *
     * @param Request $request
     * @param TodoService $todoService
     * @return JsonResponse
     */
    public function __invoke(Request $request, TodoService $todoService): JsonResponse
    {
        $response = $todoService->create(
            $request->input('title'),
            $request->input('date'),
            $request->input('time'),
            $request->input('content')
        );

        return response()->json($response);
    }
}
