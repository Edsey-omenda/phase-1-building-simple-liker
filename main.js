// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
const takeOut = document.getElementById('modal')
const errorMessage = document.getElementById('modal-message')
const tapHeart = document.querySelectorAll('.like-glyph')

tapHeart.forEach(element => {
element.addEventListener('click', () => {
mimicServerCall()
.then(() => {
  //(element.innerHTML === EMPTY_HEART)?FULL_HEART : EMPTY_HEART
  if (element.textContent === EMPTY_HEART) {
     element.textContent = FULL_HEART
     element.className = 'activated-heart'
  } else {
    element.textContent = EMPTY_HEART
    elememt.className = 'activated-heart'
  }
})
.catch(error => {
  takeOut.classList.remove('hidden')
  errorMessage.textContent = error
  setTimeout(() => {
    takeOut.classList.add('hidden')
    errorMessage.textContent = ''
  }, 2000)
})
})
})






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
