<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateTodoRequest;
use App\Services\TodoService;
use Illuminate\Http\JsonResponse;

class UpdateController extends Controller
{
    /**
     * Todoを更新し,更新したTodoをJsonで渡す
     *
     * @param UpdateTodoRequest $request
     * @param TodoService $todoService
     * @param integer $id
     * @return JsonResponse
     */
    public function __invoke(UpdateTodoRequest $request, TodoService $todoService, int $id): JsonResponse
    {
        $todo = $todoService->update(
            $id,
            $request->input('title'),
            $request->input('date'),
            $request->input('time'),
            $request->input('content')
        );

        return response()->json($todo);
    }
}
