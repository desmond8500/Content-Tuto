# Système d'Informations

>### Objectif  
Mettre en place une application qui permet de traiter les informations en entreprise.  

### Fonctionnalités

 1. Gestion de stock  
 1. Gestion de projets  
 1. Gestion des tickets    
 1. Gestion de documentation et de logiciels  
 1. Gestion de taches individuelles  
 1. Gestion de procédures  
 1. Gestion de la programmation et des équipes  
 1. Gestion des commandes  
 1. Tutoriels  
 1. Gestion des vérifications  
 1. Journal d'activité  
 1. Gestion des catalogues


- #### Gestion de stock   
 Il s'agit ici de gérer un stock de produits et d'équipements.

 Le responsable aura la possiblilité :
   * d'ajouter des articles
   * de modifier des articles
   * d'archiver des articles   
   * de gérer les mouvements de produits  
   * de gérer les emprunts  


  Le système devra :
  * signaler la rupture d'un produit à partir d'un certain seuil
  * faire un point sur le matériel à commander par rapport à celui disponible pour un projet
  * lister le matériel livré pour un projet
  * générer des bons de sortie et des borderaux de livraison   



- #### Gestion de Projets  
  Un site est un projet. Un projet peut avoir plusieurs devis.  
  Lorsqu'un devis est validé est qu'il n'est associé à aucun projet alors le site pour lequel il a été créé devient un projet. Il devra alors être assigé à un technicien et à un chef de projet.  
  Il y aura deux types de projets : les projets en cours ou terminés (qui doivent être documentés au mieux car ils sont antérieurs à l'application) et les nouveaux projets.  
  Il y aura la possibilité de gérer d'une manière spéciale les structures tel que les banques. Ces derniers ont plusieurs agences.

- #### Gestion de tickets
  Les tickets permettrons de gérer les points suivants :
  * Les réclamations (ceux des clients)
  * les incidents (notés par les techniciens)
  * les informations
  * Les demandes d'approvisionnement

- ####  Gestion de documentation et de logiciels
Les logiciels et leur documentation doit être inscrit dans la base.

- ####  Gestion de taches individuelles


- ####  Gestion de procedures
Il s'agit là d'un code de conduite. Nous décrivons ici la manière dont chaque tache doit être fait, la conduite à tenir face à certaines situations. Pour le moment tout le monde peut consulter cette rubrique.

- ####  Gestion des équipes
Certains responsables auront la possibilité de programmer des équipes sur des sites. Il y aura un coordinateur pour synthétiser et valider ces derniers et faire l'affectatoin des véhicules.

- ####  Gestion des commandes
Les commandes seront faites :
 - à partir de la somme des devis en cours
 - en complément du stock
 - en fonction de certains devis

Les commandes doivent être validés par la direction puis suivis par le transit.  
La comptabilité devra confirmer le virement une fois que la commande a été validée avec le client éffectué.  
Le transit devra régulièrement mettre à jour l'état des commandes jusqu'à leur arrivée au niveau du magasin.  
Il faudra avoir une base de donnée sur les fournisseurs.

- ####  Tutoriels  
Listes de tutoriels texte et vidéo.


### Technologies
Ce sera une application web codée en html, css, php, javascript et xml.  
Le template de base pour le design sera le boostrap 4.
Le système devra respecter le modèle MVC.  
Le système sera developpé sur une machine virtuelle ubuntu server 17.  
La documentation sera faite en markdown.  
L'interface aura deux coté backend et front end.

### Les acteurs
Voilà ci dessous la liste des acteurs. Ils peuvent tous emmetre des tickets.
 1. Installateur
 1. Administrateur
 1. Superviseur
 1. Chef de projets
 1. Observateur
 1. Technicien
 1. Commercial
 1. Secretaire
 1. Comptable
 1. Invité
 1. Magasignier

* Installateur  
  C'est le concepteur ou l'installateur. Il est chargé d'administer le système :
  - Il pourra gérer les paramètres du système
  - Faire les backups et d'appliquer les mises à jour  


* Administrateur  
  C'est le role des dirigeants, Directeur Général, Directeur Général Adjoint ainsi que certains hauts responsables administratifs. ils peuvent :
  - Consulter toutes les informations présentes dans le système.
  - Emmetre des tickets  


* Superviseur  
    Le supervieur est un chef de projet. Il peut ne pas avoir de compétences techniques. Il a la possibilité :
    - d'administrer ses projets (gérer des informations et des documents)
    - de programmer des équipes pour des travaux


* Chef de Projets  
Il a le niveau d'un responsable technique. Il peut :
 - Voir tous les projets
 - Modifier les projets qui lui sont associés
 - Programmer des équipes


* Observateur  
Il a un droit de regard sur certains éléments du système.
Il peut :
 - Suivre un projet auquel il a été associé


* Technicien  
Ils sont chargé de faire la connexion et la programmation des systèmes sur les sites. Ils font des interventions s'il y a des anomalies sur un site.
Ils peuvent :
 - Programmer une intervention avec ou sans équipe
 - Programmer une équipe
 - Emmetre un devis   
 - faire des rapports d'intervention


* Commercial
Il peut :
 - Créer des devis


* Secretaire
C'est le secrétariat qui fait les devis. Lorsqu'un technicien emmet un devis il devra le mettre à jour. Le devis présent sur l'interface sera différent de celui qui sera envoyé au client. Ce dernier est fait sur un document excel avec les prix.

Il doit :
 - créer des devis
 - associer des documents à un devis (bon de commande, plans, cahier de charge, notes techniques)


* Comptable  
Il est chagé d'actualiser état des virements d'argent pour les commandes en cours.  
Il doit aussi gérer la facturation des devis (accompte,facturation,reliquats)

* Invité  
Il peut accéder à la page de connection de l'interface et emmetre un ticket. Pour cela il devra donner son prénom et son nom.

* Magasignier  
Il doit gérer le stock. Il devra :
- gérer les entrées d'article avec la possibilité de joindre des borderaux de livraisn
- gérer les sorties d'articles avec la possibilité d'imprimer un bon de sortie
- gérer l'emprunt de matériel (renseigner qui a pris un tel équipement et pour quel site)
- Suivre l'état du stock

_Tableau de consultations et de modifications (rw)_

 | Role | Stock | Projets | Tickets | Doc et Soft | task | Equipes | Tutoriel |
 |:---------------------------------------------------------------------------|
 | Installateur | -- | -- | -- | -- | -- | -- | -- |
 | Administrateur | -- | -- | -- | -- | -- | -- | -- |
 | Superviseur | -- | -- | -- | -- | -- | -- | -- |
 | Chef Projet | -- | -- | -- | -- | -- | -- | -- |
 | Observateur | -- | -- | -- | -- | -- | -- | -- |
 | Technicien | -- | -- | -- | -- | -- | -- | -- |
 | Commercial | -- | -- | -- | -- | -- | -- | -- |
 | Secretaire | -- | -- | -- | -- | -- | -- | -- |
 | Comptable | -- | -- | -- | -- | -- | -- | -- |
 | Invité | -- | -- | -- | -- | -- | -- | -- |
 | Magasignier | -- | -- | -- | -- | -- | -- | -- |

 ### Politique de sécurité
 1. Tout ce qui n'est pas permit est interdit
 1. Tout utilisateur sauf les invités doivent s'authentifier avant d'utiliser le système
 1. Tout invité devra s'identifier pour valider son interaction avec le système
