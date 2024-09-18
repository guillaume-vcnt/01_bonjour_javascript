//01_bonjour_javascript

const userName = prompt("What is your name ?")
const firstName = userName;
const hour = 10;

function sayHello(firstName, hour) {
  let greetings = "Bonjour"  
  if (hour >= 18) {
    greetings = "Bonsoir"
  }
  const message = `${greetings} ${firstName} !`
  document.querySelector("h1").innerText = message;
}

sayHello(firstName, hour);


//Note: Attention à la violation du typage 
