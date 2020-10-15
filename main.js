// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



document.addEventListener("DOMContentLoaded",  () => {
  // hideError()
  findHeart()
})

let allHearts = document.getElementsByClassName('like-glyph')
let errorBox = document.getElementById('modal')

// function hideError() {
//   errorBox.hidden = true
// }

function findHeart() {
  for ( let heart of allHearts) {
    heart.addEventListener('click', likeHeart)
  }
}

function likeHeart() {
  heart = event.target
  mimicServerCall("bogusUrl", {forceFailure: true})
  .then(function(serverMessage) {
    if (heart.innerText == '♡') {
      heart.innerText = '♥'
    } else {
      heart.innerText = '♡'
    }
  })
  .catch(function(error) {
    errorBox.children[0].innerText = "Error with server"
    errorBox.hidden = false
  })
}






























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
