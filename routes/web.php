<?php

use App\Http\Livewire\Tuto\Tutos;
use App\Http\Livewire\Tutos\Index;
use Illuminate\Support\Facades\Route;

Route::get('/{file_name?}/{folder_name?}', Index::class)->name('index');
Route::get('/login', Index::class)->name('login');
Route::get('/tabler', Tutos::class)->name('tabler');
