<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\Services\TodoService;
use Illuminate\Http\JsonResponse;

class DeleteController extends Controller
{
    /**
     * Todoを削除し、結果をJsonで渡す
     *
     * @param TodoService $todoService
     * @param integer $id
     * @return JsonResponse
     */
    public function __invoke(TodoService $todoService, int $id): JsonResponse
    {
        $response = $todoService->delete($id);

        return response()->json($response);
    }
}
