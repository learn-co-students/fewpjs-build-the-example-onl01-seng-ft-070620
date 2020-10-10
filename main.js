// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", (e) => {
  const errorModal = document.querySelector("#modal")
  const likeBtns = document.querySelectorAll(".like")


  for (const btn of likeBtns) {
    const heart = btn.querySelector("span")
    console.log(heart)
    btn.addEventListener("click", (e) => {
      mimicServerCall()
        .then(() => {
          if (heart.getAttribute("class") != "activated-heart") {
            heart.textContent = FULL_HEART
            heart.setAttribute("class", "activated-heart")
          } else {
            heart.textContent = EMPTY_HEART
            heart.setAttribute("class", "like-glyph")
          }
        })
        .catch(error => {
          console.log(error)
          errorModal.setAttribute("class", "")
          errorModal.innerHTML += `**${error}**`
          setTimeout(() => {
            errorModal.setAttribute("class", "hidden")
            errorModal.innerHTML = "<h2>Error!</h2>"
          }, 5000)
        })
    })
  }


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
