<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PetOwnerController extends Controller
{
    public function store(Request $request): JsonResponse{
        try{
            $petOwner = new PetOwner;
            $petOwner->first_name =
            $request->first_name;
            $last_name =
            $request->last_name;
            $petOwner->email=
            $request->email;
            $petOwner->password =
            $request->password;
            $petOwner->phone_number=
            $request->phone_number;
            $petOwner->save();
            return response()
                ->json('Hello World', 201);
        }
        catch (Exception $err){
            return response ()
                ->json('Hello Bad World', 400);
        }



        }
    }

