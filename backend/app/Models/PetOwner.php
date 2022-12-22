<?php

namespace App\Models;

use App\Models\Vet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PetOwner extends Model
{
    use HasFactory;

    public function hereVet(){
        return $this->hasMany(Vet::class);  
      }
}
