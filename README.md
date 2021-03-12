# API du Pokédex (Projet Atelier développement mobile B3)

## Pour installer

`npm install` ou `yarn install && yarn run serve`

## Les routes

**ATTENTION ! Toutes les routes sauf `/login` et `/register` doivent avoir le token du user connecté en paramètre body nommé "token"**

__Les pokémons__

| Token | Méthode | URI | Body | Param | Description | 
| ------ | ------ | ------ | ------ | ------ | ------ |
| Oui | GET | `/getPokemons` | | | Renvoie tout les pokemons
| Oui | GET | `/getPokemon/:id` | | id | Renvoie tout les pokemons
| Oui | DELETE | `/deletePokemon/:id` | | id | Renvoie tout les pokemons

__Sécurité__

| Token | Méthode | URI | Body | Param | Description | 
| ------ | ------ | ------ | ------ | ------ | ------ |
| Non | POST | `/login` | email, password | | Route de login, renvoie le user et son token
| Non | POST | `/register` | email, password | | Renvoie un code 200 si le register s'est bien effectué

__Les équipes__

| Token | Méthode | URI | Body | Param | Description | 
| ------ | ------ | ------ | ------ | ------ | ------ |
| Oui | GET | `/getTeam/:user_id` | | user_id | Renvoie l'équipe du user recherché
| Oui | PUT | `/getTeam/:user_id/edit` | list | user_id | Save l'édition de la liste de pokémons pour un user donné

__Les utilisateurs__

| Token | Méthode | URI | Body | Param | Description |
| ------ | ------ | ------ | ------ | ------ | ------ |
| Oui + admin | GET | `/users` | | | Renvoie tout les users
| Oui + admin | POST | `/deleteUser` | user_id | | Supprime un utilisateur par son id
| Oui + admin | PUT | `/changeStatus` | user_id, isAdmin(du user concerné par le changement) | | Modifie les droits d'un utilisateur
