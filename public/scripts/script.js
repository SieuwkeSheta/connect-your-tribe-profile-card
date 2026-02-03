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



// Filter interactie
// Stap 1: Selecteer filter knoppen
const filterButtonAmbitions = document.querySelector('#ambitions')
const filterButtonWork = document.querySelector('#work')
const filterButtonHobbies = document.querySelector('#hobbies')

// + selecteer filter items
const filterAmbitions = document.querySelector('.ambitions')
const filterWork = document.querySelector('.work')
const filterHobbies = document.querySelector('.hobbies')

// Stap 2: Wacht tot gebruiker op filter knop klikt
filterButtonAmbitions.addEventListener('click', showAmbitions)
filterButtonWork.addEventListener('click', showWork)
filterButtonHobbies.addEventListener('click', showHobbies)

// Stap 3: Voeg class toe aan Ambities-filter knop en filter item
// + Verwijder class van de andere filter knoppen en filter items
function showAmbitions() {
  // Filter knoppen
  filterButtonAmbitions.classList.add('is-clicked')
  filterButtonWork.classList.remove('is-clicked')
  filterButtonHobbies.classList.remove('is-clicked')

  // Filter items
  filterAmbitions.classList.add('is-clicked')
  filterWork.classList.remove('is-clicked')
  filterHobbies.classList.remove('is-clicked')
}

// Stap 3: Voeg class toe aan Werkervaring-filter knop en filter item
// + Verwijder class van de andere filter knoppen en filter items
function showWork() {
  // Filter knoppen
  filterButtonWork.classList.add('is-clicked')
  filterButtonAmbitions.classList.remove('is-clicked')
  filterButtonHobbies.classList.remove('is-clicked')

   // Filter items
  filterWork.classList.add('is-clicked')
  filterAmbitions.classList.remove('is-clicked')
  filterHobbies.classList.remove('is-clicked')
}

// Stap 3: Voeg class toe aan Hobbies-filter knop en filter item
// + Verwijder class van de andere filter knoppen en filter items
function showHobbies() {
  // Filter knoppen
  filterButtonHobbies.classList.add('is-clicked')
  filterButtonAmbitions.classList.remove('is-clicked')
  filterButtonWork.classList.remove('is-clicked')

  filterHobbies.classList.add('is-clicked')
  filterAmbitions.classList.remove('is-clicked')
  filterWork.classList.remove('is-clicked')
}


// Automatisch leeftijd aanpassen
var dob = new Date("07/02/1998");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);
document.getElementById("age").innerHTML = age;