<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\Services\TodoService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class GetController extends Controller
{

    /**
     * 全てのTodoをJsonで渡す
     *
     * @param TodoService $todoService
     * @return JsonResponse
     */
    public function __invoke(TodoService $todoService): JsonResponse
    {
        $todoList = $todoService->fetchAll(Auth::id());

        return response()->json($todoList);
    }
}
