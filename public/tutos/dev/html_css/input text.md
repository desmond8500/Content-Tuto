# Personnaliser un input de type Text

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload button</title>
</head>
<body>

    <input type="file" id="file" accept="image/*">
    <label for="file">
        Choisir un avatar
    </label>


    <style>
        input[type="file"]{
            display: none;
        }
        label{
            background: blue;
            color: white;
            padding: 5px;
            border-radius: 5px;
        }
    </style>
    
</body>
</html>
```
