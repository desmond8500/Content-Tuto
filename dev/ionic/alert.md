# Alert

```htm
<div (click)="show_cgu()">Conditions Générales d'Utilisation</div>
```

```javascript
constructor(public alertController: AlertController) { }
async show_cgu() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Conditions Générales d\'Utilisation',
      // subHeader: 'Conditions Générales d\'Utilisation',
      message: 'Hello <span style="font-size:100px">&#128540;</span>',
      buttons: ['Fermer']
    }).then(res => {
      res.present();
    });
  }
```