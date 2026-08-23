# Mon Portfolio

Un portfolio simple composé de trois fichiers (HTML, CSS, JavaScript) et d'un dossier d'images.

## Structure

```
portfolio/
├── index.html      → page principale (structure du contenu)
├── style.css       → feuille de style (apparence et responsive)
├── script.js       → interactions (menu mobile, projets, formulaire)
├── images/         → placez ici vos images (photos, aperçus de projets)
└── README.md       → ce fichier
```

## Comment l'utiliser

1. **Personnaliser le contenu**
   - Remplacez les textes entre crochets `[Votre Nom]` dans `index.html`.
   - Ajoutez vos projets dans le tableau `projets` de `script.js`.

2. **Ajouter des images**
   - Déposez vos images dans le dossier `images/`.
   - Mettez à jour les chemins dans `script.js`
     (exemple : `images/projet-site-vitrine.jpg`).
   - Le héros n'utilise pas d'image : sa couleur vient du CSS.

3. **Ouvrir le site**
   - Ouvrez simplement `index.html` dans un navigateur.
   - Aucun serveur ni dépendance n'est nécessaire.

## Fonctionnalités

- Navigation fluide et menu responsive (mobile / tablette / bureau)
- Grille de projets générée dynamiquement par `script.js`
- Formulaire de contact de démonstration (les messages ne sont pas réellement envoyés)
- Année automatique dans le pied de page

## Personnalisation des couleurs

Toutes les couleurs sont définies dans les variables CSS en haut de `style.css` :

```css
:root {
    --couleur-principale: #2563eb;
    --couleur-secondaire: #1e293b;
    --fond: #f8fafc;
    --texte: #334155;
}
```

Modifiez ces valeurs pour changer tout le thème en une fois.