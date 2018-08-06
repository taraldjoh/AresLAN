window.onload = start; 

function start() {
    openModal();    
    animate();
    document.querySelector(".scroll-effect").addEventListener("click", animate);
}

function animate() {
    $('html,body').animate({
        scrollTop: $("#scroll").offset().top
    },'slow');
}

function openModal() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the closeBtn that can close the modal

    var btn = document.getElementById('clsBtn');

    function fadeOutModal() {
        modal.className = 'modal animated fadeOut';
            setTimeout(() => {
                modal.style.display = 'none';
                modal.className ='modal animated fadeIn'
            }, 750);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        fadeOutModal();
    }

    btn.onclick = function() {
            fadeOutModal(); 
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            fadeOutModal();
            }
    }

    // Modal trigger 
    const modalTriggers = document.querySelectorAll('.myBtn');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });
}
