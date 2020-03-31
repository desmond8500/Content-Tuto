# Storage and Files

## Storage

```php
// Require
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

// Function
$cover = $request->file('image');
Storage::disk('public')->put($dir,  File::get($cover));
```
