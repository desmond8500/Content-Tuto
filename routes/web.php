<?php

use App\Http\Livewire\Tutos\Index;
use Illuminate\Support\Facades\Route;

Route::get('/{file_id?}/{categorie?}', Index::class)->name('index');
