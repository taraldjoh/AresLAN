window.onload = start;

function start() {
  openModal();
}

// Ticket Modal
function openModal() {
  // Get the modal
  var modal = document.getElementById("tckModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Get the closeBtn that can close the modal

  var btn = document.getElementById("clsBtn");

  function fadeOutModal() {
    modal.className = "modal animated fadeOut";
    setTimeout(() => {
      modal.style.display = "none";
      modal.className = "modal animated fadeIn";
    }, 750);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    fadeOutModal();
  };

  btn.onclick = function() {
    fadeOutModal();
  };

  var tap = true;
  document.addEventListener("touchstart", function(event) {
    tap = true;
  });
  document.addEventListener("touchmove", function(event) {
    tap = false;
  });
  document.addEventListener("touchend", function(event) {
    if (tap) {
      //users tapped the screen
    }
  });
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      fadeOutModal();
    }
  };

  // Modal trigger
  const modalTriggers = document.querySelectorAll(".tckBtn");

  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });
}

// Smooth scrolling

$("#navbar a, .btn, a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 130
      },
      600
    );
  }
});

//Sticky menu transparent background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
