## Contextualisons

- Avant Angular 16, les composants standalones n'existaient pas. Ça veut dire que chaque projet était organisé autour de modules. Tu peux voir un module comme une boîte qui regroupe des composants, des services, des pipes, des directives et d'autres modules. L'avantage, c'est que si un élément (comme le FormsModule ou le Pipe Async) est déclaré dans le module, alors **tous les éléments de ce module pourront y avoir accès**.\
👉 Concrètement, jette un oeil à l'application `modules-app` et regarde son `app-module.ts`.\
👉 Va également faire un tour dans le `app-component` puis dans le `home-component`.

> Quelle sont les différences notables que tu remarques par rapport une architecture en standalone ?

- Un module c'est donc très pratique, mais ça a des inconvénients : si je souhaite utiliser mon `HomeComponent` dans un autre module que celui dans lequel il est déclaré, je vais devoir **importer tout le module dans lequel il est déclaré** ; autrement dit, vouloir utiliser le `HomeComponent`dans un autre module signifie que je devrai importer le `app.module.ts` tout entier... pour uniquement utiliser le `HomeComponent`. Pas fou pas fou tout ça ! 🥸
- Car si je souhaite n'utiliser que le `AppComponent` mais que j'importe tout son module, j'importe aussi les autres composants, services, pipes, directives et modules qui y sont déclarés & importés... et ce n'est pas très optimisé.

## C'est pour ça que les composants standalones sont nés 🥳

- L'idée : les modules disparaissent, chaque composant est responsable de ses seules dépendances. Cela signifie que le composant devra importer ce dont il a besoin pour fonctionner ; tant pis si 2 composants proches doivent importer chacun le même composant, services, pipe, directive ou module...\
👉 Concrètement, rends-toi dans l'application `standalone-app` et regarde les composants `app-component` et `home-component`

- Utiliser les standalones components est donc préférable à une architecture orientée modules, car c'est plus léger, plus simple à comprendre, plus réutiliasbles et plus facile à refactorer. 

> Mais si les avantages sont évidents, quel inconvénient majeur retiens-tu par rapport à l'utilisation d'un module ?

## Le routing change entre standalone et module 

- Tu as peut-être vu que dans le `modules-app`, il y a un fichier qui s'appelle `app-routing.module.ts`. Ce fichier est l'équivalent de ce que tu connais avec l'architecture orientée standalone : le `app.routes.ts`.
- Le `app-routing.module.ts` vient donc déclarer un tableau de routes, et charger les composants en fonction de la route empruntée. C'est donc bien proche de ce que tu connais déjà, à la différence qu'ici, on parle d'un module car dans l'architecture orientée modules, chaque élément doit appartenir à un module. Même un tableau de routes...
- Mais ce qui change vraiment, c'est lorsqu'il s'agit d'implémenter le `Lazy Loading`. Autrement dit, le "chargement fainéant", ou "je ne charge un élément que lorsque j'en ai besoin".\
👉 Concrètement, jette un oeil dans le `app-routing.module.ts` puis dans le `admin-routing.module.ts` et dans le  `user-routing.module.ts`
- Donc c'est plutôt pas mal, ça organise bien les différentes parties de notre application et c'est pour ça que l'on parle de `feature modules`. Autrement dit, dès lors que l'on a une grosse fonctionnalité à réaliser, que l'on peut également qualifier de `sub-domain`, alors on crée un `module` qui porte son nom, et qui contiendra ses `uses-cases` décrits pas les composants `feature` et connectés à la logique métier par les `services` (généralement selon le pattern facade/api/store).

- Ça ressemble donc beaucoup à l'architecture que tu as découvert avec les standalone : simplement, pour les standalone, on ne parle de modules ni de feature module (puisqu'il n'y a pas de modules hahaha). **On crée simplement un dossier portant le nom de la fonctionnalité.**

👉 Vérifie que tu as bien compris en jettant un coup d'oeil à l'architecture dans l'application `standalon-app`. Tu verras que c'est peu ou prou similaire, mais que les modules n'existent plus.

> En revanche, que remarques-tu concernant le `Lazy Loading` dans le fichier `app.routes.ts` pour une application Angular orientée standalone ?

## Et voilà ! 🥳

Ce petit atelier te permet d'y voir un peu plus clair sur les 2 types d'architecture que tu peux rencontrer lors d'un projet Angular : l'architecture orientée module ou l'architecture orientée standalone.

Pour des applications vraiment complexes, note que tu peux régulièrement retrouver des architectures utilisant : 
- La solution de monorepos, libs et microfrontends [Nx](https://nx.dev/). C'est beau, pur et très scalable. Si tu veux en savoir plus,  [ce podcast te parle des + et des - d'une architecture monorepo.](https://open.spotify.com/episode/5gV6Vn2RVjdrsIiW7Hkoiz?si=afee75fa24ab4136)
- La solution de gestion de state basée sur RxJS et la plus utilisée pour Angular : [NgRx.](https://ngrx.io/)

Ces deux architectures sont plus difficiles à comprendre et à mettre en place, mais elles sont très puissantes. Elle fonctionnent bien pour de très grosses applications, à la logique métier complexe, à l'état partagé sensible et au partage de code réutilisable entre plusieurs applications.

Garde-le en tête pour approfondir ça à l'avenir 😌

## Un délicieux bonus 🎁

As-tu déjà entendu parler de l'inversion de dépendances ? C'est un outil extrêment puissant pour conçevoir des architectures ultra-robustes, flexibles, maintenables et évolutives (le terme de clean architecture te parle peut-être) Comme toujours, l'utilisation de ce genre d'outils dépend du besoin métier, mais je t'invite à prendre le temps de découvrir cette notion si tu n'es pas familier [avec cette douce vidéo 🥹](https://www.youtube.com/watch?v=0-OOh6G7LPc)

Merci pour ton like ! 😁🤙