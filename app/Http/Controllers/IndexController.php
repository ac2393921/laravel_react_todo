<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class IndexController extends Controller
{
    /**
     * app viewを返却する
     *
     * @return View
     */
    public function __invoke(): View
    {
        return view('app');
    }
}
