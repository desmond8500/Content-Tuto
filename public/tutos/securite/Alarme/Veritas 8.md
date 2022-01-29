# Véritas 8

## Codes par défaut

Techncien 1234  
Master 4321

## Armer/désarmer le système

code + `TOTAL`  
code + `RAZ`

Mettre le code simplement permet d'arrêter l'alarme et de voir la zone en défaut

## Réinitialiser le système

1234 + `PROG` + 07 + `PROG`

## Changement de code personnel

code + `PROG` + 60 + code

## Ajouter un code utilisateur utilisateur

4321 + `PROG` + 63 + code + `PROG` = utilisateur 3  
4321 + `PROG` + 64 + code + `PROG` = utilisateur 4  
4321 + `PROG` + 65 + code + `PROG` = utilisateur 5  
4321 + `PROG` + 66 + code + `PROG` = utilisateur 6  
4321 + `PROG` + 67 + code + `PROG` = utilisateur 7  
4321 + `PROG` + 68 + code + `PROG` = utilisateur 8

## Visualiser le numero d'utiliasteur

code + `PROG` + 69

## Visualiser le niveau d'habilité

code + `PROG` + 79

## Habiliter un code utilisateur

4321 + `PROG` + 73 + 1 + `PROG` = type utilisateur 1  
4321 + `PROG` + 74 + 1 + `PROG` = type utilisateur 1  
4321 + `PROG` + 75 + 1 + `PROG` = type utilisateur 1  
4321 + `PROG` + 76 + 1 + `PROG` = type utilisateur 1  
4321 + `PROG` + 77 + 1 + `PROG` = type utilisateur 1  
4321 + `PROG` + 78 + 1 + `PROG` = type utilisateur 1

## Temporisations

1234 + `PROG` + 31 + temps mn (15s) pour la temporisation en sortie totale  
1234 + `PROG` + 32 + temps mn (15s) pour la temporisation en sortie partielle  
1234 + `PROG` + 33 + temps mn (15s) pour la temporisation en entrée totale  
1234 + `PROG` + 34 + temps mn (15s) pour la temporisation en entrée partielle

## Types de zones

2 = Exclue  
3 = Immédiate  
6 = Entrée / Sortie  
7 = Panique

## Types de codes

1 = Utilisateur  
2 = Technicien  
5 = Maitre utilisateur
