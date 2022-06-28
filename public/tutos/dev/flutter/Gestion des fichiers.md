# Gestion des fichiers

## Importer un fichier

Pour importer un fichier il faut le créer dans le dossier ``lib`` puis l'importer : 

```Name`` correspond au nom du fichier défini dans le le fichier ``pubspec.yaml

Dans le fichier ``main.dart``

```javascript
import 'package:flutter/material.dart';
import 'package:komkom/pages/index.dart';

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

```

dans le fichier ``pages\index.dart``

```javascript
import 'package:flutter/material.dart';

class MainPage extends StatelessWidget {
  const MainPage({Key? key}) : super(key: key);

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
