<?php

namespace App\Http\Controllers\Todo;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateTodoRequest;
use App\Services\TodoService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class CreateController extends Controller
{
    /**
     * Todoを作成し、結果をJsonで渡す
     *
     * @param CreateTodoRequest $request
     * @param TodoService $todoService
     * @return JsonResponse
     */
    public function __invoke(CreateTodoRequest $request, TodoService $todoService): JsonResponse
    {
        $response = $todoService->create(
            Auth::id(),
            $request->input('title'),
            $request->input('date'),
            $request->input('time'),
            $request->input('content')
        );

        return response()->json($response);
    }
}
