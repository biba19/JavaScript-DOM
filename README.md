# Interaction avec le DOM

### Le titre

Dans le fichier JavaScript, procédez aux opérations suivantes :

- Loguez le titre de la page, accessible via `document.title`
- Tout comme le titre à été lu, il est possible de le réécrire, changez le titre et écrivez `'Ce titre est beaucoup trop long'`
- Loguez le titre et/ou vérifiez le nouveau titre dans votre navigateur

### Les éléments du DOM

- Récupérez et loguez les éléments correspondant à la balise `h2`
- Récupérez et loguez les éléments correspondant à la classe `text-red`
- Récupérez et loguez l'élément correspondant à l'id `sous-titre-DOM`

### Les évènements

- Dans votre fichier JavaScript, écoutez sur les évènements `mouseover` et `mouseout` sur l'élément dont l'id est `event-listener`
- Récupérez l'évènement en paramètre de votre fonction de la façon suivante :

```javascript
element.onevent = function (event) {
  console.log('Evènement :', event);
};
```

- Vous trouverez dans les propriétés de cet évènement `x` et `y`, correspondant au placement de la souris
- Loguez `x` et `y` pour les évènements sur `mouseover` et `mouseout`
- Vous pouvez également accéder un objet appelé `window` ayant une propriété `innerWidth` donnant la taille intérieur de votre fenêtre en pixels
- Servez-vous de cette propriété pour déterminer si, au moment de mettre la souris sur l'élément dont l'id est `event-listener`, la souris est à droite ou à gauche du texte
- Au moment de survoler le texte, affichez `GAUCHE` ou `DROITE` dans la console

### Modifier le DOM

En récupérant les éléments du DOM dans le fichier JavaScript, servez-vous de la propriété `classList` pour modifier les éléments de la façon suivante :

- Lorsque le texte est survolé par la gauche, supprimez la classe (le texte sera noir)
- Lorsque le texte est survolé par la droite, la classe doit être présente (le texte sera rouge)
- Lorsque le texte n'est pas survolé, la classe doit être présente (le texte sera rouge)

Exemple d'ajout d'élément :

```javascript
let p = document.createElement('p');
document.body.appendChild(p);
```

- Au clic sur l'élément dont l'id est `sous-titre-DOM`, ajoutez un élément paragraphe `p` avec la classe CSS `text-red`
- Ajoutez-y du texte grâce à la propriété `innerHtml` ou `innerText`
- Si vous cliquez plusieurs fois, plusieurs éléments seront créés
- Ajoutez le comportement de la partie [Les évènements](#les-évènements) sur chacun des nouveaux éléments créés

Pour supprimer un élément :

- Ajoutez un bouton dans le document HTML
- Créez une fonction dans le fichier JavaScript réagissant au clic du bouton
- Récupérez tous les paragraphes de la page et supprimez-les
