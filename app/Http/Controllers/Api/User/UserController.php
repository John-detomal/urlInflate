<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Nette\Utils\Json;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Exception;


class UserController extends Controller
{
    //
    protected  $message = 'success';

    public function user() : object
    {

        $user = User::get();
        return response()->json([
            'success' => true,
            'message' => $this->message,
            'data' => $user
        ],200)->getData();
    }


    public function store(UserRequest $request) : Object
    {
        $user = User::create($request->all());
        return response()->json([
            'success' => true,
            'message' => $this->message,
            'data'  => $user
        ],200)->getData();
    }

    public function show($id) : Object {
        $user = User::findorFail($id);

        return response()->json([
            'success' => true,
            'message' => $this->message,
            'data' => $user,
        ]);
    }

    public function update(UserRequest $request, $id) : Object{

        User::find($id)->update($request->all());

        return response()->json([
            'success' => true,
            'message' => $this->message,
        ],500)->getData();
    }

    public function delete($id) {

        User::findOrFail($id)->delete();
        return response()->json([
            'success' => true,
            'message' => $this->message,
        ],404);

    }

}
