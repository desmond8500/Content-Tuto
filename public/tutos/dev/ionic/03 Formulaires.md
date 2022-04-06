# Formulaires

## Select form

```htm
<ion-item>
    <ion-label>Users</ion-label>
    <ion-select >
        <ion-select-option *ngFor="let user of users" [value]="user">{{user.first + ' ' + user.last}}</ion-select-option>
    </ion-select>
</ion-item>
```

```javascript
import { Component } from '@angular/core';

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.html',
  styleUrls: ['./select-example.css'],
})
export class SelectExample {
  users: User[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
  ];
}
```

## Reactives forms

```javascript
import { FormControl, FormGroup, Validators } from '@angular/forms';
export class BookFormComponent {

    bookForm = new Formgroup({
        bookTitleControl: new FormControl(),
        bookDescriptionControl: new FormControl(),
    });


    submitBook() {
        console.log(this.bookForm.value);
    }
}
```

```htm
<input type="text" [formControl]="bookTitleControl">

<textarea [formControl]="bookDescriptionControl"></textarea>

<button type="submit" (click)="submitBook()">SUBMIT</button>
```

## Custom file input

```htm
<div class="upload">
  <label class="custom-file-upload">
    <ion-input type="file"></ion-input>
    <ion-icon name="card-outline"></ion-icon>
  </label>
</div>
```

```css
.custom-file-upload {
  border: 1px solid #8c8c8c;
  background: #8c8c8c;
  color: white;
  font-weight: bold;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
  text-align: center;
}

.upload{
  display: flex;
  justify-content: center;
}
```

## Source

* [Marmicode](https://guide-angular.wishtack.io/angular/formulaires/reactive-forms/la-boite-a-outils-des-reactive-forms)
* [Ionic doc](https://ionicframework.com/docs/api/select)
