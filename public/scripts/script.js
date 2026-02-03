// Kaart flippen
// Stap 1: Selecteer de voor- en achterkant van de visitekaart
// + de flip knop
const frontCard = document.querySelector('.card-front')
const BackCard = document.querySelector('.card-back')
const flipButton = document.querySelector('.flip-card-button')


// Stap 2: Wacht tot op elke knop gedrukt wordt
flipButton.addEventListener('click', flipCard)

function flipCard() {
  // Stap 3: Voeg een class toe om de kaart te flippen
  frontCard.classList.toggle('is-flipped')
  BackCard.classList.toggle('is-flipped')
}



// Automatisch leeftijd aanpassen
var dob = new Date("07/02/1998");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);
document.getElementById("age").innerHTML = age;