# Wo — Le blog de FA Communication

Blog éditorial francophone de FA Communication, construit avec Hugo, hébergé gratuitement sur GitHub Pages et administré avec Pages CMS.

## Identité éditoriale

- Nom : **Wo**
- Signature : **Le blog de FA Communication**
- Accroche : **La curiosité ouvre le monde.**
- Rubriques : Culture, Talents, Digital, Société, Créativité et Vibrance.
- Mascotte : ajouter le fichier original à `static/images/wo/wo.png` (ne pas remplacer par une autre illustration).

## Architecture

- **Hugo** génère le site statique.
- **Pages CMS** permet de rédiger les articles et de gérer les images depuis le navigateur.
- **GitHub Actions** vérifie chaque modification et prépare le déploiement.
- **GitHub Pages** héberge le site sans frais sur un dépôt public.

## Rédaction

Dans Pages CMS, ouvrir la collection **Articles** :
1. Créer un article avec un titre, une date et un résumé.
2. Laisser **Brouillon** activé tant que le texte n'est pas prêt.
3. Choisir une rubrique et saisir les mots-clés séparément (une entrée par mot-clé).
4. Ajouter une image de couverture horizontale de bonne qualité.
5. Relire l'aperçu, puis désactiver Brouillon uniquement lorsque l'article est prêt à paraître.

Les pages **À propos**, **Contact**, **Mentions légales**, **Confidentialité** et les six rubriques sont également exposées dans Pages CMS, dans le groupe **Pages du blog**. Les deux pages juridiques restent des brouillons : leur statut de brouillon est conservé et elles ne doivent pas être publiées avant validation.

Les rubriques existantes peuvent être modifiées depuis le groupe **Pages du blog → Rubriques**. Pour ajouter une nouvelle rubrique, il faut encore créer un dossier avec `_index.md`, définir son titre, sa description et son poids d'affichage, puis ajouter son nom dans les catégories des articles concernés et dans la configuration CMS.

## Développement local

Installer Hugo Extended, puis lancer :

```sh
hugo server -D
```

Pour produire le site :

```sh
hugo --minify
```

## Publication — à effectuer après validation

Le workflow `.github/workflows/deploy.yml` est volontairement déclenchable **manuellement uniquement** (`workflow_dispatch`). Aucun push ni aucune fusion ne déclenche une publication automatique. Il ne devra être lancé qu'après validation du site et accord explicite. La branche de préparation `setup/initial-hugo-foundation` n'est pas destinée à être publiée directement.

Avant la première publication :
- vérifier le rendu sur ordinateur et mobile ;
- ajouter la mascotte originale ;
- compléter et faire vérifier les mentions légales et la politique de confidentialité ;
- vérifier les paramètres GitHub Pages et l'absence de conflit avec un déploiement existant ;
- préparer le domaine personnalisé uniquement après accord explicite et vérification DNS.

Le domaine souhaité est `blog.facommunication.tg`. Aucun changement DNS n'est autorisé à ce stade.

## Sécurité et périmètre

Ce projet utilise exclusivement le dépôt `jibidar/blog-facommunication`. Le dépôt `jibidar/facommunication.tg`, le site principal et sa configuration DNS sont hors périmètre et ne doivent pas être modifiés.
