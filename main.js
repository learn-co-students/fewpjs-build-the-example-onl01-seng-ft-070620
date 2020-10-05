// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let allHearts = document.querySelectorAll('.like-glyph');

function updateHeart(event) {
  let heart = event.target;
  mimicServerCall()
  .then(function(response) {
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    } else if (heart.innerText === FULL_HEART) {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  })
  .catch(function(error) {
    const errors = document.getElementById('modal');
    errors.classList.remove("hidden");
    errors.textContent = error;
    setTimeout(function() {errors.className = "hidden"}, 5000);
  })
}

for (const like of allHearts) {
  like.addEventListener('click', updateHeart);
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
