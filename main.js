// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.querySelector("#modal").className = "hidden"

const hearts = document.querySelectorAll(".like-glyph")

for (const heart of hearts) {
  
  
  heart.addEventListener("click", function(e) {
    mimicServerCall()
    .then((response) => {
      console.log(response);
      toggleLike(heart);
    })
    .catch((error) => {
      document.querySelector("#modal-message").innerHTML = error;
      document.querySelector("#modal").classList.remove("hidden");
      setTimeout(function() { document.querySelector("#modal").className = "hidden" }, 5000)
    })
  })
};

function toggleLike(heart){
  if (heart.innerHTML == EMPTY_HEART) {
    heart.innerHTML = FULL_HEART;
    heart.classList.add("activated-heart")
  } else {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove("activated-heart")
  }
};




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
