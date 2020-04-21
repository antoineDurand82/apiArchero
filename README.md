# apiArchero

## Oui bonjour c'est nous

La petite saucisse
Ouai ouai le test

https://archero.fandom.com/wiki

Dans le .env tu peux changer le nom de ton projet, le port de phpmyadmin et le port de mariadb
Depuis le dossier :
Pour utiliser : docker-compose up (ça utilise un terminal)
Pour éteindre : CTRL+C et ensuite docker-compose down
Si jamais tu veux remove ton volume de db : docker volume ls et tu récupère le volume avec le nom de ton projet, ensuite docker volume rm {lenom}
Une commande utile : docker volume prune (attention ça remove tous les volumes non utilisés)


Commande pour insert 1 item dans la bdd (pour test avant vrai remplissage)
```
INSERT INTO `armors`(`id`, `full_name`, `max_hp`, `level`, `rarity`, `common_buff`, `rare_buff`, `epic_buff`, `perfect_epic_buff`, `legendary_buff`, `ancient_legendary_buff`, `link_image`) VALUES (0,"Golden chestplate",100,0,"rarity","common_buff","rare_buff","epic_buff","perfect_epic_buff","legendary_buff","ancient_legendary_buff","link_image");
```