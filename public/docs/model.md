# Tutos

## Conception

```mermaid
classDiagram

class Tuto{
    +string name
}
class Category{
    +foreingid tuto_id
    +string name
    +string folder
}
class File{
    +foreingid category_id
    +string name
    +string folder
}

```
