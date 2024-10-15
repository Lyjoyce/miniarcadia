const form = document.querySelector('form');

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

    // On fait la vérification.
    const baliseNom = document.getElementById('nom');
    const valeurNom = baliseNom.value;
    if (valeurNom === "") {
        console.log('Le champ nom est vide');
    } else {
        console.log('Le champ nom est rempli');
    }
});

//Pour vérifier la valeur d’un champ à la saisie, le principe est le même. Nous allons écouter un événement. Deux types d'événements sont possibles dans ce cas :

//l’événement input : il se déclenche à chaque fois que l’utilisateur tape une lettre dans le champ ;

//l’événement change : il se déclenche quand l’utilisateur a fini de taper, et sélectionne un autre élément de la page.  avec les expressions régulières
//autre méthode trim()

let chaine = "cachalot"; // Testez avec des chiffres pour voir la différence
let regex = new RegExp("^[a-z]+$");
let resultat = regex.test(chaine);
console.log(resultat); // Affiche true.