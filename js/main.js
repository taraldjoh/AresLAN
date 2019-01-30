window.onload = start;

function start() {
  openModal();
}

// Modals
function openModal() {
  // Get the ticket modal
  var modalTicket = document.getElementById("tckModal");
  // Get the rule modal
  var modalRule = document.getElementById("ruleModal");
  // Get the packing modal
  var modalPacking = document.getElementById("packingModal");

  // Get the <span> element that closes the modal and close when pressed
  // Ticket close <span> element
  var tckClose = document.getElementById("tckClose");
  tckClose.addEventListener("click", fadeOutModal);
  // Rule close <span> element
  var ruleClose = document.getElementById("ruleClose");
  ruleClose.addEventListener("click", fadeOutModalRule);
  // Packing close <span> element
  var packingClose = document.getElementById("packingClose");
  packingClose.addEventListener("click", fadeOutModalPacking);

  // Get the closeBtn that can close the modal and close when pressed
  // Ticket Close Button
  var tckClsBtn = document.getElementById("tckClsBtn");
  tckClsBtn.addEventListener("click", fadeOutModal);
  // Rule Close button
  var ruleClsBtn = document.getElementById("ruleClsBtn");
  ruleClsBtn.addEventListener("click", fadeOutModalRule);
  // Packing Close Button
  var packingClsBtn = document.getElementById("packingClsBtn");
  packingClsBtn.addEventListener("click", fadeOutModalPacking);

  // Ticket fadeoutmodal
  function fadeOutModal() {
    modalTicket.className = "modal animated fadeOut";
    setTimeout(() => {
      modalTicket.style.display = "none";
      modalTicket.className = "modal animated fadeIn";
    }, 750);
  }

  // Rule fadeoutmodal
  function fadeOutModalRule() {
    modalRule.className = "modal animated fadeOut";
    setTimeout(() => {
      modalRule.style.display = "none";
      modalRule.className = "modal animated fadeIn";
    }, 750);
  }

  // Packing fadeoutmodal
  function fadeOutModalPacking() {
    modalPacking.className = "modal animated fadeOut";
    setTimeout(() => {
      modalPacking.style.display = "none";
      modalPacking.className = "modal animated fadeIn";
    }, 750);
  }
  // Event listener if user clicks outside of the modal
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
    if (event.target == modalTicket) {
      fadeOutModal();
    }
    if (event.target == modalRule) {
      fadeOutModalRule();
    }
    if (event.target == modalPacking) fadeOutModalPacking();
  };
  // Ticket Modal trigger
  const modalTicketTriggers = document.querySelectorAll(".tckBtn");

  modalTicketTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      modalTicket.style.display = "block";
    });
  });

  // Rule Modal trigger
  const modalRuleTriggers = document.querySelectorAll(".ruleBtn");

  modalRuleTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      modalRule.style.display = "block";
    });
  });

  // Packing Modal Trigger
  const modalPackingTriggers = document.querySelectorAll(".packingBtn");

  modalPackingTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      modalPacking.style.display = "block";
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

// Initialize and add the Google Map
function initMap() {
  //Location
  const loc = { lat: 62.202888, lng: 6.1272 };

  // Center Map on Location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  // Marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
