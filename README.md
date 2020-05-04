# apiArchero

## Description du projet

Le projet est une interface web connectée à une api permettant la création d'un "builder" pour le jeu mobile Archero.

Un "builder" est une application permettant de tester des ensembles d'équipements et de les comparer entre eux afin de savoir le quel sera le plus optimisé pour notre style de jeu.

Archero est un jeu mobile où le joueur contrôlera un archer qui devra progresser de salle en salle. Pour ce faire le joueur devra tuer des ennemis et il ne pourra le faire que lorsqu'il sera immobile, en effet dans ce jeu, le personnage ne tire qu'à l'arrêt. Il faudra donc user de ruse, de stratagèmes, de talent et un peu de chance afin de pouvoir progresser au plus haut niveau. L'équipement étant une part importante du jeu et de votre survie, nous avons penser avec ce projet permettre la création d'un builder pour aider les joueurs.

## Lancement du projet

Pour lancer ce projet il vous faudra tout d'abord cloner ce repo sur votre pc.

Une fois dans le repo cloné, vous devrez ensuite vous déplacer dans le dossier backend pour lancer tout ce dont l'api à besoin.
Il vous sera nécessaire de posséder [docker](https://docs.docker.com/engine/install/ubuntu/) également ainsi que [docker-compose](https://docs.docker.com/compose/install/)

```bash
# On va tout d'avord lancer le docker-compose qui lancera notre base de donnée ainsi qu'un phpmyadmin

$ cd apiArchero/backend/docker
$ docker-compose up -d
```

```bash
# On va ensuite lancer le serveur node js pour l'api

$ cd apiArchero/backend
$ npm run start

```

*Pour seeder la base de donnée avec nos données vous pouvez utiliser cette commande :*

```bash
$ npx sequelize db:seed:all
``` 

```bash
# Et enfin on va lancer le front

$ cd apiArchero/frontend
$ npm run serve
```

Nous vous conseillons de lancer dans des terminaux séparés le docker, le serveur node ainsi que le front.

Une fois lancés vous pouvez aller sur http://localhost:3000 pour avoir directement les réponses api ou alors http://localhost:8000 pour avoir l'interface web.

Une fois sur l'interface web, cliquez sur le bouton dashboard afin d'avoir accès à la partie CRUD.