<?php

namespace App\Http\Livewire\Tutos;

use App\Models\Tutoriel;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Spatie\Tags\Tag;

class Index extends Component
{
    public $file, $file_name, $folder_name;

    public function mount($file_name=null, $folder_name=null)
    {
        $this->file_name = $file_name;
        $this->folder_name = $folder_name;
        $this->getFile();
    }
    public function render()
    {
        return view('livewire.tutos.index',[
            // "list" => Tutoriel::withAnyTags($this->folder_name)->get(),
            // "tags" => Tag::all(),
            "file" => $this->file,
        ])->extends('tutos.layout')->section('content');
    }

    public function getFile()
    {
        if ($this->file_name) {
            // $file = Tutoriel::find($this->file_name);
            $content = file_get_contents("tutos/$this->folder_name/$this->file_name");
            $this->file = $content;
        }else{
            $this->file = null;
        }
    }
}
