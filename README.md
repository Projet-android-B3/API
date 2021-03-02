# API du Pokédex (Projet Atelier développement mobile B3)

## Pour installer

`npm install` ou `yarn install && yarn run serve`

## Les routes

**ATTENTION ! Toutes les routes sauf `/login` et `/register` doivent avoir le token du user connecté en paramètre body nommé "token"**

__Les pokémons__

GET `/getPokemons` -> renvoie tout les pokemons en base

GET `/getPokemon/:id` (:id est l'id du pokemon recherché) -> renvoie un pokemon d'après son id

DELETE `/deletePokemon/:id` -> (:id est l'id du pokemon recherché) -> supprime un pokemon d'après son id

__Sécurité__

POST `/login` (avec email et password(crypté) dans le body) -> Route de login, renvoie le user et son token

POST `/register` (avec email, firstname, lastname, password(crypté) dans le body) -> Renvoie un code 200 sir- le register s'est bien effectué

__Les équipes__

GET `/getTeam/:user_id` (:user_id est l'id du user recherché) -> renvoie l'équipe du user recherché

POST `/getTeam/:user_id/edit` (:user_id est l'id du user recherché et list est la liste des pokémons) -> save l'édition de la liste de pokémons pour un user donné

__Les utilisateurs__

GET `/users` -> renvoie tout les utilisateurs de la base

POST `/deleteUser` (avec user_id dans le body) -> supprime un utilisateur par son id