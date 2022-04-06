# Laravel Mail

## Installation

## Créer un mail

```console
php artisan make:mail NewMail
```

Il faut ensuite personnaliser le mail en ajoutant au moins un envoyeur

```php
public function build()
{
    return $this->view('mail.devis')
    ->from('test@test.com')
    ;
}
```

Pour utiliser une adresse par défaut il faudra le définir dans le fichier `config/mail.php`

```php
'from' => ['address' => 'example@example.com', 'name' => 'App Name'],
```

## Joindre un fichier de la plateforme

```php
public function build()
{
    return $this->view('emails.orders.shipped')
                ->attach('/path/to/file');
}
```

```php
public function build()
{
    return $this->view('emails.orders.shipped')
                ->attach('/path/to/file', [
                    'as' => 'name.pdf',
                    'mime' => 'application/pdf',
                ]);
}
```

## Joindre un fichier externe

```php
public function build()
{
   return $this->view('emails.orders.shipped')
               ->attachFromStorage('/path/to/file');
}
```

```php
public function build()
{
   return $this->view('emails.orders.shipped')
               ->attachFromStorage('/path/to/file', 'name.pdf', [
                   'mime' => 'application/pdf'
               ]);
}
```


## Source

[Mail](https://laravel.com/docs/9.x/mail)



