// Etape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let erreur = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");
let instructions = document.querySelector("#instructions");

//****Créer les variables****
let coups = 0;
let nombreChoisi;


//***Fonction****Créer la fonction vérifier
function verifier(nombre) {
  let instruction = document.createElement("div"); //créer un div
  
  if (nombre < nombreAleatoire) {
    instruction.textContent = `#${coups} ${nombre} C'est plus`;
    instruction.classList.add("plus", "instruction");
    
    
  } else if (nombre > nombreAleatoire) {
    instruction.textContent = `#${coups} ${nombre} C'est moins`;
    instruction.className = "instruction moins";
   
  
  } else {
    instruction.textContent = `#${coups} ${nombre} C'est gagné`;
    instruction.className = "instruction fini";
    instructions.prepend(instruction);
    input.disabled = true;
  }
  
  instructions.prepend(instruction);
  
}


// Etape 2 - Cacher l'erreur
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
    //console.log(nombreChoisi, coups);
    input.value = ""; //vider le champ de formulaire
    verifier(nombreChoisi);
    
  }
});


