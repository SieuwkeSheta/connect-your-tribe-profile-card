/* Rij (knoppen) met Werkervaring, Hobbies en Ambities */
let werkButton = document.querySelector('#werk')

werkButton.addEventListener('click', function() {
  console.log("werk");
  document.querySelector(".werk1").classList.toggle('is-shown')
  document.querySelector(".werk2").classList.toggle('is-shown')
})

let hobbiesButton = document.querySelector('#hobbies')

hobbiesButton.addEventListener('click', function() {
  console.log("hobbies");
  document.querySelector(".hobbies1").classList.toggle('is-shown')
  document.querySelector(".hobbies2").classList.toggle('is-shown')
  document.querySelector(".hobbies3").classList.toggle('is-shown')
})

let ambitiesButton = document.querySelector('#ambities')

ambitiesButton.addEventListener('click', function() {
  console.log("ambities");
  document.querySelector(".ambities").classList.toggle('is-shown')
})

// Automatisch leeftijd aanpassen
var dob = new Date("07/02/1998");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);
document.getElementById("age").innerHTML = age;