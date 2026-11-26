# Wo — Le blog de FA Communication

Site éditorial indépendant de FA Communication, construit avec Hugo et destiné à être publié sur GitHub Pages à l'adresse https://blog.facommunication.tg.

## Identité éditoriale

- Nom : **Wo**
- Signature : **Le blog de FA Communication**
- Accroche de travail : **La curiosité ouvre le monde.**
- Couleurs : rouge et blanc pour l'interface, jaune pour la mascotte Wo.
- Rubriques : Culture, Talents, Digital, Société, Créativité et Vibrance.

## Technologies

- Hugo : génération du site statique.
- GitHub : dépôt et gestion des contenus.
- GitHub Actions : compilation et déploiement.
- Pages CMS : interface éditoriale à configurer et valider.

## Développement local

Installer Hugo Extended, puis lancer :

```sh
hugo server -D
```

Le site est disponible localement à l'adresse indiquée par Hugo (généralement http://localhost:1313).

## Publication

Le workflow GitHub Actions est préparé pour compiler le site et le déployer sur GitHub Pages lors d'un push sur `main`. Avant la première publication, sélectionner **GitHub Actions** comme source de déploiement dans les paramètres Pages du dépôt.

Le domaine personnalisé et le DNS seront configurés séparément, uniquement après validation du site et vérification de la configuration DNS existante.

## Mascotte

Le fichier de la mascotte devra être placé dans `static/images/wo/wo.png`. Le nom et le chemin de l'image sont configurables dans `hugo.toml`. Le fichier original de Wo n'a pas encore été ajouté au dépôt.

## Sécurité et périmètre

Ce projet utilise uniquement le dépôt `jibidar/blog-facommunication`. Le dépôt du site principal `jibidar/facommunication.tg` et sa configuration DNS ne doivent pas être modifiés dans le cadre de ce projet.
