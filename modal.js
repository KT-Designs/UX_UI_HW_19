/*Contact Me Modal for Desktop View*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const sendBtn = document.querySelector(".btn");

// close modal function
const closeModal = function () {
  $(".modal").fadeToggle(50);
  $(".overlay").fadeToggle(50);
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
sendBtn.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  $(".modal").fadeToggle(50);
  $(".overlay").fadeToggle(50);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// open modal event
openModalBtn.addEventListener("click", openModal);
/*End Contact Me Modal for Desktop View*/









/*Drop Down Menu for Mobile View*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*End Drop Down Menu for Mobile View*/
