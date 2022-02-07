# Laravel Sanctum

## Description

C'est un système d'authentification allégé basé sur l'utilisation de token pour communiquer avec des applications mobiles ou des SPA (Single Page Application).

## Installation

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

Il faut mettre à jour le fichier `app/Http/Kernel.php`

```bash
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

## Utilisation

Dans le fichier `route\api.php`

```bash
Route::resource('game', GameController::class)->middleware('auth:sanctum');
```

```bash
Route::post('register', function (Request $request) {
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);
    $token = $user->createToken('user_token');

    $response = [
        'success' => true,
        'data'    => ['user_token' => $token->plainTextToken],
        'message' => "L'utilisateur a été créé",
    ];

    return response()->json($response, 200);

})->name('register');
```

## Source 

* [Source 1](https://www.positronx.io/build-secure-php-rest-api-in-laravel-with-sanctum-auth/)
