<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTodoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:255',
            'date' => 'required',
            'time' => 'required',
            'content' => 'required|max:1000',
        ];
    }

    public function messages()
    {
        return [
            'required' => '入力必須の項目です。',
            'max' => ':max文字以内で入力してください。',
        ];
    }
}
