// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMessage = document.getElementById("modal")
errorMessage.className = "hidden"

const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(heart => {
  heart.addEventListener("click", (event) => {
    mimicServerCall()
    .then((response) => {
      return response.json
    })
    .then((jsObj) => {
      if (heart.innerHTML == EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.className = "activated-heart"
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.className = "like-glyph"
      }
    })
    .catch((error) => {
      console.log(error)
      errorMessage.className = ""
      window.setTimeout(function() {errorMessage.className = "hidden"}, 5000)
    })
  })
})









//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
