<?php

namespace App\Http\Livewire\Tabler\Pages;

use Illuminate\Support\Facades\Storage;
use Livewire\Component;

class Index extends Component
{
    public function render()
    {
        return view('livewire.tabler.pages.index',[
            'tutos' => Storage::disk('tutos')->directories(),
        ]);
    }

    public function init()
    {
        $tutos = Storage::disk('tutos')->directories();
    }
}
