<?php

namespace App\Http\Controllers\User;

use App\Models\Url;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UrlController extends Controller
{
    //

    public function index(){
        $user_id = Auth::user()->id;
        $items = Url::where('user_id', $user_id)->get();
        return Inertia::render('User/Url/Index',[
            'items' => $items,
        ]);
    }

    public function randomCode(): String{

        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        $charactersNumber = strlen($characters);
        $codeLength = 10;

        $code = '';

        while (strlen($code) < 10) {
            $position = rand(0, $charactersNumber - 1);
            $character = $characters[$position];
            $code = $code.$character;
        }



        return $code;

    }

    public function store(Request $request) {
        $request->validate([
            'current_url' => 'required|regex:/^[a-zA-Z]+\.[a-zA-Z]+$/'
        ]);
        $currenturl = url()->current();
       
        $new_url = str_replace('/store', '', $currenturl);
        $input = $request->all();
        $code = $this->randomCode();

        $input['result_code'] = $code;
        $input['user_id'] = Auth::user()->id ?? 1;
        Url::create($input);
       

        return redirect()->back()->with('code', $new_url.'/'.$code);
    }

    public function delete($id){
        Url::find($id)->delete();

        return redirect()->back();
    }

    public function update(Request $request, $id){
       Url::find($id)->update($request->all());

       return redirect()->back();
    }
}
