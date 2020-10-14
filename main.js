// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let error = document.querySelector('div#modal') 
error.className = "hidden"

let likeButtons = document.querySelectorAll('li.like')
for (let likeButton of likeButtons)
{
  likeButton.addEventListener('click', function() {
    let glyph = likeButton.querySelector('span')
    if (glyph.innerHTML == EMPTY_HEART)
    {
      mimicServerCall()
      .then(function() {
        glyph.innerHTML = FULL_HEART
        glyph.className = 'activated-heart'
      })
      .catch(function() {
        error.className = ""
        setTimeout(function() {error.className = 'hidden'}, 5000)
      })

      
    }
    else
    {
      glyph.innerHTML = EMPTY_HEART
      glyph.className = ""
    }
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
