# GIT

## Description

C'est un gestionnaire de dépendances qui permet de faciliter le développment d'applications.

## Utilisation

```bash
git branch dev-diene
git checkout dev-diene
git merge master
git push --set-upstream origin dev-diene
```

## Workflow 

master = master  
develop = beta  test  
dev = developper  

## Récupération des mises à jour

```bash
git checkout develop
git pull
npm install
```

permet de récupérer les modifications de la branche develop

```bash
git checkout dev-diene
git merge develop
```

### Gesrion des conflits (fight)
