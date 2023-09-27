# Planty

## Présentation 
Planty est une application de suivi de la santé de vos plantes

### Technologies utilisées
- Ionic
- Angular 16
- Typescript

> Projet en développement

### Lancer le projet

Installer les packages
> npm install

Lancer le serveur ionic
> ionic serve

Ou lancer avec capacitor
> ionic cap run android

## Fonctionnalités
- [ ] Un carroussel présent tout en haut de l'application dans une catégorie 'plantes a arroser' - Page Dashboard
  - L'utilisateur peut cliquer sur la plante pour directement enregistrer un arrosage
  - la carte de la plante:
    -  une photo par défaut ou une photo prise par l'utilisateur
    - nom
    - besoin d'arrosage ou non sous forme de badge
      
- [ ] Affichage des infos utilisateurs - Page Dashboard
    - son nom
    - son nombre de plante
    
- [ ] L'utilisateur peut voir la liste de ses plantes - Page liste
  - nom
  - besoin d'arrosage ou non sous forme de badge
  - date du prochain arrosage

- [ ] L'utilisateur peut voir le détail d'une de ses plantes - Page détail de la plante
  - nom
  - date d'acquisition
  - coordonnées gps
  - date et heure du dernier arrosage
  - période d'arrosage
  - une photo de la plante
  - l'espece de la plante
  - un lien vers la page wikipedia de l'espece
    
-  [ ] L'utilisateur peut modifier les détails de sa plantes - Page détail de la plante
    - un select comportant la liste des especes de plantes permet à l'utilisateur de choisir l'espèce qui sera afficher sur la page détail
    - un formulaire pour modifier les autres propriétés
    - pouvoir enregistrer les modifications
    - pouvoir supprimer les modifications
      
- [ ] L'utilisateur peut supprimer sa plante - Page détail de la plante
  - une popup de confirmation apparait  
