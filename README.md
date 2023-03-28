# Rendu_Ex_PWA

## Workbox
### I) Fonctionnalités offertes
- Gestion du cache : stratégies de mise en cache flexibles pour les  différents fichiers de l'application. Il y a différentes stratégies de mise en cache, networkFirst, cacheFirst, NetworkOnly, CacheOnly et StaleWithRevalidate.

- Stratégies de mise à jour : mise à jour automatique en arrière plan pour les fichiers en cache lorsqu'une nouvelle version est disponible sur le serveur ou à la demande à l'utilisateur de recharger la page pour obtenir la dernière version.

- Gestion des erreurs : gestion des erreurs pour les requêtes réseau avec des réponses de secours pour les requêtes échouées ou les erreurs réseau.

- Réécriture d'URL : fonctionnalité de réécriture d'URL pour les requêtes réseau qui permet de contrôler la gestion des requêtes et les réponses sont renvoyées.

- Gestion des versions : gestion facile des différentes versions de l'application et garantit que les utilisateurs obtiennent toujours la dernière version.

- Intégration avec les outils de construction : Workbox s'intègre facilement avec les outils de construction de projet tels que Webpack, Rollup et Parcel pour une intégration sans effort dans le pipeline de construction de votre projet.


### II) Méthodes de cache et utilisations possibles
- NetworkFirst : lance la récupération des informations en ligne, si il y a un manque de réseau ou une erreur dans la récupération, on lit les données stockées en cache -->

- CacheFirst : permet de charger des données en cache d'abord avant d'aller les récupérer si le cache est vide --> affichage de données qui ne varient pas

- CacheOnly : lecture uniquement en cache, pas de lecture en ligne mais erreur si le cache est vide --> rechargement rapide de l'application

- NetworkOnly : on récupère toujours les informations en ligne, pas de lecture ni de mise en cache --> toujours afficher des données à jour

- StaleWhileRevalidate : permet de charger les données en cache et de les afficher pendant que la récupération en ligne est effectuée. L'affichage de la récupération en ligne sera effectuée si elle s'est terminée sans erreur --> permet de ne pas laisser un écran vide à l'utilisateur pendant le chargement des nouvelles données


### III) Uses cases à intégrer dans le projet interface relation docteur/patient
- récupération et mise en cache des rdv client, de la liste des médecins, etc.


## Page d'incitation à l'installation de la PWA

### I) Créer composant (React/Vue/Angular/HTML+CSS) pour inciter et surtout guider un utilisateur à installer la PWA
Lien vers le composant : [InfoPage](https://github.com/CorentinLrcn/Rendu_Ex_PWA/blob/main/component/info-page.jsx)

### II) Expliquer l'intérêt de mettre en place une telle page
Permet de présenter :
- ce qu'est une PWA
- les diverses fonctionnalités offertes par la PWA
- les devices sur léquels on peut télécharger la PWA