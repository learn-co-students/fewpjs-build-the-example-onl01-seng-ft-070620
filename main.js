// defining text characters for the empty and full hearts
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// upon DOM content load, add event listeners to each heart button
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal")
  const errorMsg = document.getElementById("modal").querySelector("h2")
  const hearts = document.querySelectorAll(".like-glyph")

// when the user clicks on an empty heart, invoke mimicServerCall()
  // catch error if given one in response
  // if not, make the heart full
// when user clicks on a full heart, change heart to empty w/o "server call" 
  for (const element of hearts) {
    element.addEventListener("click", (e) => {
      if (element.classList.contains("activated-heart")) {
        element.innerText = EMPTY_HEART // change the heart to a empty heart
        element.classList.remove("activated-heart") // remove the class
      } else {
        mimicServerCall()
        .then(() => {
          element.innerText = FULL_HEART // change the heart to a full heart
          element.classList.add("activated-heart") // add a class to it
        })
        .catch(error => {
          modal.classList.remove("hidden") // remove the modal's .hidden class
          errorMsg.innerHTML = error // replace its text with the error
          // restore the .hidden class after 5 seconds, hiding the modal
          setTimeout(function() {modal.classList.add("hidden")}, 5000)
        }) // end catch
      } // end else
    }) // end element event listener
  } // end for..of loop

}) // end event listener function for DOM content loaded


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
