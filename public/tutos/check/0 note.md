### Comment utiliser un serveur de BD en réseau

1. Paramétrer le serveur de base de donnée pour qu'il écoute son interface réseau. Redemmarer
1. Donner les privilèges à user en précisant ses privilèges  
```
GRANT ALL PRIVILEGES ON base.* to bouki@xxx.xxx.xxx.xxx identified by 'passer';
```

### Services de base
1. Service de messagerie
 * Agents de messagerie  
  Il y a trois programmes qui tournent c'est ce que l'on apelle agent de messagerie.  

| Agent | Fonction | Exemple |
| :------------- | :------------- |
| **MUA**  | (mail user agent = client de messagerie) qui s'occupe de lecture ou d'écriture de mails.  | outlook, evolution, thunderbird |
| **MTA** | C'est un serveur qui s'occupe du transfert de mail entre serveurs, il est aussi appelé "*serveur SMTP*" | Postfix, sendmail, exchange|
| **MDA** | il s'occupe de la distribution de mail dans les boites des utilisateurs | Dovecot-pop3d, devecot-imapd|

 * Les protocoles utlisés en messagerie  
  * **SMTP** permet à un client de messagerie d'envoyer des mails à son serveur MTA ou à un MTA d'envoyer des messages à d'autres MTA  

  * **POP (Post Office protocol)**  
  * **IMAP (Interactive Mail Access Protocol)**  
   Permet d'accéder à ses mails sans pour autant perdre les mails
  * **MIME**   
  C'est un protocol MIME est un format de données qui permet de distinguer le mail des fichiers joints

1. Architecture générale d'un service de messagerie  
  Pour un webmail, l'administrateur doit configurer tout le serveur sauf le login ou le mot de passe.  
  client leger = login et mot de passer
  client lourd = pa

1.
1.
1.
