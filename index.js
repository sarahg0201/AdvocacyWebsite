// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

  document.body.classList.toggle("dark-mode");

    // Write your code to manipulate the DOM here


}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.

themeButton.addEventListener("click", toggleDarkMode);


// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");

const addSignature = (person) => {
    // Write your code to manipulate the DOM here
  
  const signature = document.createElement("p");
  signature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
  const signaturesSection = document.getElementById("petition").querySelector(".signatures");
  signaturesSection.appendChild(signature);
  //person.preventDefault();
  
  
  
}

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = (event) => {
  event.preventDefault();

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  let person = {
    name: petitionInputs[0].value, 
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  
  if (person.name.length < 2) {
    containsErrors = true;
    petitionInputs[0].classList.add('error');
    petitionInputs[1].classList.remove('error');
    petitionInputs[2].classList.remove('error');
  } else if (person.hometown.length < 2){
    containsErrors = true;
    petitionInputs[1].classList.add('error');
    petitionInputs[0].classList.remove('error');
    petitionInputs[2].classList.remove('error');
  } else if (person.email.length < 2) {
    containsErrors = true;
    petitionInputs[2].classList.add('error');
    petitionInputs[0].classList.remove('error');
    petitionInputs[1].classList.remove('error');
  } else {
    petitionInputs[0].classList.remove('error');
    petitionInputs[1].classList.remove('error');
    petitionInputs[2].classList.remove('error');
  }
  
  if (containsErrors == false) {
    
    addSignature(person);
    toggleModal(person);
    //preventDefault();
    
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
  event.preventDefault();

}
signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance:150,
  initialOpacity:0,
  transitionDelay:0,
  transitionDuration:'2s',
  transitionProperty:'all',
  transitionTimingFunction:'ease'
  
}

let revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {

  
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
      
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

let motionButton = document.getElementById("motion-button");


const reduceMotion = () => {
  animation.transition = 'all 0s ease';
  animation.revealDistance = 0;
  animation.transitionDuration=0;
  let revealableContainers = document.querySelectorAll('.revealable');
  for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.revealDistance = animation.revealDistance;
  revealableContainers[i].style.transitionDuration = animation.transitionDuration;
    revealableContainers[i].style.transition = animation.transition;

  }
}

motionButton.addEventListener("click", reduceMotion);


const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you, ${person.name}! We appreciate your help!`;
  
  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);

  let intervalId = setInterval(() => {
    scaleImage();
  }, 500);
}

let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");

const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
  
}