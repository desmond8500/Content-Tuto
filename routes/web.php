<?php

use App\Http\Livewire\Tabler\Pages\Index;
use Illuminate\Support\Facades\Route;

Route::get('/', Index::class)->name('index');
