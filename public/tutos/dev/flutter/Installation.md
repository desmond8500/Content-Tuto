# Flutter

## Installation

1. Télécharger le SDK sur le site de Futter [ici](https://docs.flutter.dev/get-started/install/windows)
2. Copier le contenu de l'archive dans un dossier `C:\src\flutter`
3. Copier le chemin vers du dossier `C:\src\flutter\bin` dans la variable d'environnement path
4. Aller dans le dossier flutter puis à partir d'un terminal (cmdr de préférence) exécuter :

    ```console
    where flutter dart
    ```

   Cela doit normalement afficher une liste de dossier
5. Lancer la commande

   ```console
    flutter doctor
   ```

    En cas d'erreurs, consulter les liens suivants: 
    * [command line missing](https://www.fluttercampus.com/guide/202/cmdline-tools-component-is-missing-error-flutter/)
    * [Google chrome](https://www.google.com/intl/fr/chrome/thank-you.html?statcb=1&installdataindex=empty&defaultbrowser=0)
    * [Desktop developpement with C++](https://fluttercorner.com/please-install-the-desktop-development-with-c-workload-including-all-of-its-default-components/)

## Créer un projet

```console
flutter create app_name
```

## Modèle de projet

```javascript
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MainPage()
    );
  }
}

class MainPage extends StatelessWidget {
  const MainPage({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('KomKom'),
      ),
    );
  }
}
```
