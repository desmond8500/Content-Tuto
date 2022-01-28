# Laravel : Les migrations

## Description

Les migrations sont comme le contrôle de version de votre base de données, permettant à votre équipe de définir et de partager la définition du schéma de base de données de l'application.

## Ajouter une table

Pour ajouter une clé étrangère

```php
$table->foreignId('projet_id')->constrained();
```

Pour ajouter une clé étrangère avec une contrainte de suppression

```php
$table->foreignId('projet_id')->constrained()->onDelete('cascade');
```

## Ajouter une colonne à une table qui existe

Pour créer le fichier de migration il faut lancer dans le terminal la commande suivante :

```bash
php artisan make:migration add_tel_to_users
```

puis ajouter le champs dans le fichier qui a été créé 

```php
 public function up()
{
    Schema::table('projet_journals', function (Blueprint $table) {
        $table->string('folder')->nullable();
    });
}
```
lancer la migration

## Sources

* [Migrations](https://laravel.com/docs/8.x/migrations)
