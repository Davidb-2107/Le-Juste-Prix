// Etape 1 - Sélectionner nos éléments
const input         = document.querySelector("#prix");
const erreur        = document.querySelector("small");
const formulaire    = document.querySelector(`[name="formulaire"]`);
const instructions  = document.querySelector("#instructions");
const relancer      = document.querySelector("#relancer");  


//****Créer les variables****
let coups = 0;
let nombreChoisi;


//***Fonction****
//Créer la fonction qui permet de vérifier si le nombreChoisi = ou < ou > que nombreAleatoire
  
function verifier(nombre) {
  //Create a div
  let instruction = document.createElement("div"); //CREER un div
  instruction.setAttribute("id","resultat"); //AJOUTER un id "resultat" au div
  
  //C'est plus
  if (nombre < nombreAleatoire) {
    instruction.textContent = `#${coups} ${nombre} C'est plus`;
    instruction.classList.add("plus", "instruction");
    
  //C'est moins  
  } else if (nombre > nombreAleatoire) {
    instruction.textContent = `#${coups} ${nombre} C'est moins`;
    instruction.className = "instruction moins";
   
  //Met fin au jeux 
  } else {
    instruction.textContent = `#${coups} ${nombre} C'est gagné`;
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  
  //Add the div to the document
  instructions.prepend(instruction);
  
}


// Etape 2 - Cacher le message
//"Vous devez rentrer un nombre"
erreur.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 10);
  console.log(nombreAleatoire)

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    erreur.style.display = "block";
  } else {
    erreur.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
  e.preventDefault(); //annule l'événement par défaut du navigateur

  if (isNaN(input.value) || input.value === "") {
    formulaire.style.borderColor = "red";
  } else {
    formulaire.style.borderColor = "silver";
    coups++;
    nombreChoisi = input.value;
    input.value = ""; //vider le champ de formulaire
    verifier(nombreChoisi);
    
  }
});


// Relancer le jeu
relancer.addEventListener("click", (e) => {
  input.disabled = false;
  let element = document.querySelectorAll("#resultat");
element.forEach( e => {
  e.remove();
})
  
});
