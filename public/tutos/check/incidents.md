### Diagramme des cas d'utilisations

1. Créer tickets (Utilisateur/Technicien/Admin) [Diarra]
3. Suivre ses ticket (Utilisateur/Technicien/Admin) [Diarra]
2. Modifier un ticket (Admin) [Diarra]
4. Valider tickets (Admin) [Diarra]

5. Assigner tickets (Admin) [Jessy]
6. Rechercher tickets (Utilisateur/Technicien/Admin) [Jessy]
7. Faire réclamation (Utilisateur) [Jessy]

8. Créer un compte (Admin) [Ibou]
9. Modifier un compte (Admin) [Ibou]
10. Supprimer un compte (Admin) [Ibou]
11. Consulter liste compte (Admin) [Ibou]
12. Rechercher compte (Admin) [Ibou]

13. Renseigner la BD des solution (Technicien/Admin) [MasterCode]
14. Consulter la BD des solution (Technicien/Admin) [MasterCode]

15. Consulter Statistiques (Admin) [Diene]
16. Exporter statistiques (Admin) [Diene]

17. S'authentifier (Utilisateur/Technicien/Admin) [Traoré]



============================================================================

__Employe__  

1. Créer tickets (Utilisateur/Technicien/Admin) [Diarra]  
3. Suivre ses ticket (Utilisateur/Technicien/Admin) [Diarra]  
6. Rechercher tickets (Utilisateur/Technicien/Admin) [Jessy]  
17. S'authentifier (Utilisateur/Technicien/Admin) [Traoré]  

__User System__  

13. Renseigner la BD des solution (Technicien/Admin) [MasterCode]  
14. Consulter la BD des solution (Technicien/Admin) [MasterCode]  
14. Rechercher une solution dans la BD (Technicien/Admin) [MasterCode]  

__Technicien__  

18. Prise en charge tickets (Technicien) [Jessy]  
4. Valider tickets (Utilisateur/Technicien) [Diarra]  

__Admin__  

15. Consulter Statistiques (Admin) [Diene]  
16. Exporter statistiques (Admin) [Diene]  

5. Assigner tickets (Admin) [Jessy]  
2. Modifier un ticket (Admin) [Diarra]  
4. Cloturer tickets (Admin) [Diarra]  

8. Créer un compte (Admin) [Ibou]  
9. Modifier un compte (Admin) [Ibou]  
10. Supprimer un compte (Admin) [Ibou]  
11. Consulter liste compte (Admin) [Ibou]  
12. Rechercher compte (Admin) [Ibou]  

8. Créer un categorie (Admin)  [Diene]
9. Modifier un categorie (Admin)  [Diene]
10. Supprimer un categorie (Admin)  [Diene]

__Utilisateur__  

4. Valider tickets (Utilisateur/Technicien) [Diarra]  
7. Faire réclamation (Utilisateur) [Jessy]  

====================================================================

- La cloture des tickets sera automatique, le technicien valide (resolu) et l'utiliseur confirme (cloture)
- Un ticket a les états suivant (Nouveau, assigné, en cours, résolu ou non resolu, clos)
-


- Version 3
### Diagramme des cas d'utilisations

1. Créer tickets (Utilisateur/Technicien/Admin) [Diarra]
3. Suivre ses ticket (Utilisateur/Technicien/Admin) [Diarra]
2. Modifier un ticket (Admin) [Diarra]
4. Valider tickets (Admin) [Diarra]

5. Assigner tickets (Admin) [Jessy]
6. Rechercher tickets (Utilisateur/Technicien/Admin) [Jessy]
7. Faire réclamation (Utilisateur) [Jessy]

8. Créer un compte (Admin) [Ibou]
9. Modifier un compte (Admin) [Ibou]
10. Supprimer un compte (Admin) [Ibou]
11. Consulter liste compte (Admin) [Ibou]
12. Rechercher compte (Admin) [Ibou]

14. Consulter une solution (Technicien/Admin) [MasterCode]
14. Rechercher une solution (Technicien/Admin) [MasterCode]
14. Modifier une solution (Technicien/Admin) [MasterCode]

15. Consulter Statistiques (Admin) [Diene]
16. Exporter statistiques (Admin) [Diene]

17. S'authentifier (Utilisateur/Technicien/Admin) [Traoré]
















### A faire

1. Description textuelle de chaque cas (documentation)
2. Diagramme d'activité de chaque cas
<hr>

### Points à gérer plus tart

* acteur externe
* jqhgklf





### Detail des cas d'utilisations

 __Afficher les statistiques selon une duree (hebdomadaire, mensuel, personnalisé)__  
Pour chaque requette statistique nous allons permettre à l'initiateur de choisir la durée sur laquelle le rapport statistique sera généré.   
Nous allons donc mettre en place un formulaire horizontal au début de la page et un texte explicatif sur le mode d'utilisation en dessous.  

Dans les champs de ce formulaire il y aura:
 * le choix du type de rapport (tickets,utilisateurs,...)
 * le choix entre un rapport général ou un rapport individuel
 * le choix de la durée sur laquelle portera le rapport
 * un bouton de validation



Voilà ci dessous les actions que pourra réaliser l'acteur :

1. __Afficher la liste des tickets resolus  ou non__     
1. __Afficher la liste des les tickets émis__
1. __performance des Techniciens__
1. __nombre de tickets par Categorie__
1. __frequence d'emission de tickets__
1. __Afficher des statistiques globales (toutes les statistiques dans un fichier)__

1. __Exporter le rapport dans un fichier (PDF,XML,CSV,TXT)__
