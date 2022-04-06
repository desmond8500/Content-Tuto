# Gestion de fichier

```php
public function init_public_videos($folder)
    {
        foreach (glob("$folder/*") as $key => $video) {
            if (is_dir($video)) {
                $mytag = Tag::findFromString(ucfirst(basename($video)), 'pvideo');
                if ($mytag) {
                    $tag = $mytag;
                }else{
                    $tag = Tag::firstOrCreate([
                        'type' => 'pvideo',
                        'name' => ucfirst(basename($video))
                    ]);
                }
                foreach (glob("$video/*") as $key => $sub_video) {
                    $this->add_video($sub_video, $tag->name);
                }
            } else {
                $this->add_video($video);
            }
        }

    }
    public function add_video($video, $tag=null)
    {
        $vid = DashVideos::firstOrCreate(
            ['name' => basename($video)],
            ['file' => $video]
        );
        if ($tag) {
            $vid->attachTag($tag, 'pvideo');
        }
    }
```
