<?php

namespace App\Http\Controllers;

use App\Models\Vet;
use Exception;
use http\Exception\InvalidArgumentException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;

class VetController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        try {
            $vet = new Vet;
            $vet->first_name = $request->first_name;
            $vet->last_name = $request->last_name;
            $vet->email = $request->email;
            $vet->password = $request->password;
            $vet->phone_number = $request->phone_number;
            $vet->siret = $request->siret;

            $vet->save();
            return response()
                ->json('Hello World', 201);
        } catch (Exception $err){
            return response()
                ->json('Hello Bad World', 400);
        }


    }

}

