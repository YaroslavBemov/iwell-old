<?php

namespace App\Http\Requests\Api;

use \Illuminate\Foundation\Http\FormRequest;

class RegisterFormRequest extends FormRequest
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
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
            'remember_token' => ['nullable', 'boolean'],
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'birthday' => ['nullable', 'date_format:Y-m-d'],
            'gender' => ['nullable', 'in:male,female'],
            'avatar' => ['nullable', 'image', 'max:50', 'dimensions:min_width=100,max_width=200,min_height=100,min_height=200'],
            'hometown_id' => ['required', 'exists:cities'],
        ];
    }
}
