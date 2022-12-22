<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vet extends Model
{
    use HasFactory;

    //public mixed $first_name;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    /*protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'phone_number',
        'siret',
        'pet_owner_id',
    ];*/


    public function clientPetOwner()
    {
        return $this->hasMany(PetOwner::class);
    }
}
