<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\Services\TodoService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CheckController extends Controller
{
    /**
     * Todoのチェックを更新し、TodoをJsonで渡す
     *
     * @param Request $request
     * @param TodoService $todoService
     * @param integer $id
     * @return JsonResponse
     */
    public function __invoke(Request $request, TodoService $todoService, int $id): JsonResponse
    {
        $todo = $todoService->check($id, $request->input('is_checked'));

        return response()->json($todo);
    }
}
