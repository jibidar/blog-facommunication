# Wo — Le blog de FA COMMUNICATION

Blog éditorial francophone de FA COMMUNICATION, construit avec Hugo, hébergé gratuitement sur GitHub Pages et administré avec Pages CMS.

## Identité éditoriale

- Nom : **Wo**
- Signature : **Le blog de FA COMMUNICATION**
- Accroche : **La curiosité de rester en éveil.**
- Positionnement : **Regards sur une Afrique et un monde qui créent, innovent et rayonnent.**
- Rubriques : Culture, Talents, Digital, Société, Créativité et Vibrance.
- Mascotte : fichier original intégré à `static/images/wo/wo.png` (ne pas remplacer par une autre illustration).

## Architecture

- **Hugo** génère le site statique.
- **Pages CMS** permet de rédiger les articles et de gérer les images depuis le navigateur.
- **GitHub Actions** vérifie chaque modification et prépare le déploiement.
- **GitHub Pages** héberge le site sans frais sur un dépôt public.

## Prévisualiser le blog sur son ordinateur

La prévisualisation locale permet de parcourir le site dans Chrome sans le publier sur Internet. Elle ne modifie ni le site principal ni le DNS.

### 1. Préparer les outils

Il faut installer :
- **Git**, pour récupérer le dépôt ;
- **Hugo Extended**, version étendue, pour générer le site et ses styles.

Après installation, ouvrir PowerShell et vérifier que les commandes répondent :

```powershell
git --version
hugo version
```

La version de Hugo doit indiquer qu'il s'agit de la version **extended**.

### 2. Récupérer la branche de préparation

Dans PowerShell, exécuter les commandes suivantes :

```powershell
git clone --branch setup/initial-hugo-foundation https://github.com/jibidar/blog-facommunication.git
cd blog-facommunication
```

Si le dossier du projet existe déjà sur l'ordinateur, il n'est pas nécessaire de le cloner une deuxième fois : ouvrir PowerShell dans ce dossier et vérifier que la branche active est `setup/initial-hugo-foundation`.

### 3. Démarrer l'aperçu local

```powershell
hugo server -D --baseURL http://localhost:1313/
```

Puis ouvrir cette adresse dans le navigateur :

**http://localhost:1313/**

Garder PowerShell ouvert pendant la consultation. Pour arrêter le serveur, revenir dans cette fenêtre et appuyer sur **Ctrl + C**.

> **Important :** l'option `-D` affiche aussi les contenus encore en brouillon, notamment l'article de lancement. Les mentions légales et la politique de confidentialité sont, elles, intégrées au site généré. Cet aperçu est privé à l'échelle de l'ordinateur : il ne constitue pas une publication en ligne. Ne pas désactiver le statut Brouillon d'un contenu uniquement pour le voir dans cet aperçu.

En cas de message indiquant que `hugo` n'est pas reconnu, Hugo Extended n'est probablement pas installé ou son chemin n'est pas encore ajouté au PATH de Windows.

## Rédaction

Dans Pages CMS, ouvrir la collection **Articles** :
1. Créer un article avec un titre, une date et un résumé.
2. Laisser **Brouillon** activé tant que le texte n'est pas prêt.
3. Choisir une ou plusieurs rubriques et saisir les mots-clés séparément (une entrée par mot-clé).
4. Ajouter une image de couverture horizontale de bonne qualité.
5. Relire l'aperçu, puis désactiver Brouillon uniquement lorsque l'article est prêt à paraître.

Les pages **À propos**, **Contact**, **Mentions légales**, **Confidentialité** et les six rubriques sont également exposées dans Pages CMS, dans le groupe **Pages du blog**. Les deux pages juridiques sont publiées dans le site généré et restent modifiables depuis Pages CMS.

Les rubriques principales peuvent être modifiées depuis **Pages du blog → Rubriques**. Les sous-rubriques sont gérées dans la collection **Sous-rubriques** : elles apparaissent automatiquement sur la page de leur rubrique. Le menu principal reste volontairement réservé aux six rubriques, aux articles et à la recherche afin de rester clair sur ordinateur comme sur mobile. Pour en créer une, choisir la rubrique principale, saisir un titre, une description et un ordre d'affichage. Les sous-rubriques sont volontairement évolutives : il est possible d'en ajouter, d'en renommer ou d'en réorganiser sans modifier les six rubriques principales.

Lors de la rédaction d'un article, choisir d'abord sa rubrique principale, puis, si cela est pertinent, sa sous-rubrique correspondante. Le champ Sous-rubrique reste facultatif. Éviter de créer une sous-rubrique pour chaque article : elles doivent regrouper de vrais sujets éditoriaux récurrents.

## Génération du site

Pour vérifier ou générer le site sans lancer le serveur local :

```powershell
hugo --minify
```

## Publication — à effectuer après validation

Le workflow `.github/workflows/deploy.yml` est volontairement déclenchable **manuellement uniquement** (`workflow_dispatch`). Aucun push ni aucune fusion ne déclenche une publication automatique. Il ne devra être lancé qu'après validation du site et accord explicite. La branche de préparation `setup/initial-hugo-foundation` n'est pas destinée à être publiée directement.

Avant la première publication :
- vérifier le rendu sur ordinateur et mobile ;
- tester Pages CMS avec un brouillon réel (article, image, rubrique et sous-rubrique) ;
- compléter et faire vérifier les mentions légales et la politique de confidentialité ;
- finaliser les coordonnées de contact de la rédaction ;
- vérifier les paramètres GitHub Pages et l'absence de conflit avec un déploiement existant ;
- préparer le domaine personnalisé uniquement après accord explicite et vérification DNS.

Le domaine souhaité est `blog.facommunication.tg`. Aucun changement DNS n'est autorisé à ce stade.

## Sécurité et périmètre

Ce projet utilise exclusivement le dépôt `jibidar/blog-facommunication`. Le dépôt `jibidar/facommunication.tg`, le site principal et sa configuration DNS sont hors périmètre et ne doivent pas être modifiés.
