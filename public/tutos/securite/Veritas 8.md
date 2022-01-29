# Véritas 8

## Codes par défaut

Techncien 1234
Master 4321

## Armer/désarmer le système

* code + `TOTAL`
* Code + RAZ 

Mettre le code simplement permet d'arrêter l'alarme et de voir la zone en défaut

## Réinitialiser le système

1234 + prog + 07 + prog

## Changement de code personnel

code + prog + 60 + code

## Ajouter un code utilisateur utilisateur

4321 + prog + 63 + code + prog = utilisateur 3
4321 + prog + 64 + code + prog = utilisateur 4
4321 + prog + 65 + code + prog = utilisateur 5
4321 + prog + 66 + code + prog = utilisateur 6
4321 + prog + 67 + code + prog = utilisateur 7
4321 + prog + 68 + code + prog = utilisateur 8

## Visualiser le numero d'utiliasteur

code + prog + 69

## Visualiser le niveau d'habilité

code + prog + 79

## Habiliter un code utilisateur

4321 + prog + 73 + 1 + prog = type utilisateur 1
4321 + prog + 74 + 1 + prog = type utilisateur 1
4321 + prog + 75 + 1 + prog = type utilisateur 1
4321 + prog + 76 + 1 + prog = type utilisateur 1
4321 + prog + 77 + 1 + prog = type utilisateur 1
4321 + prog + 78 + 1 + prog = type utilisateur 1

## Temporisations

1234 + prog + 31 + temps mn (15s) pour la temporisation en sortie totale
1234 + prog + 32 + temps mn (15s) pour la temporisation en sortie partielle
1234 + prog + 33 + temps mn (15s) pour la temporisation en entrée totale
1234 + prog + 34 + temps mn (15s) pour la temporisation en entrée partielle

## Types de zones

2 = Exclue
3 = Immédiate
6 = Entrée / sortie
7 = Panique

## Types de codes

1 = Utiilateur
2 = Technicien
5 = Maitre utilisateur