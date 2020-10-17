// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};


let modal = document.getElementById("modal")
modal.classList.add("hidden")

let allHearts = document.querySelectorAll(".like")

for (let glyph of allHearts) {
  glyph.addEventListener('click', (event) => {
  likeCallback(event)
  })
}

function likeCallback(e) {
  let heart = e.target
  mimicServerCall("bogusUrlHere") //,{forceFailure: true}
  .then(function(serverMessage){
    console.log(serverMessage)
    heart.innerText = glyphStates[heart.innerText]
    heart.style.color = colorStates[heart.style.color]
  })
  .catch(function(error){
    console.log(error)
    modal.className = ""
    modal.innerText = "Random server error. Try again."
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
