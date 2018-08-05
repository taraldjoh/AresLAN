window.onload = start; 

function start() {
    openModal();
}

function openModal() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the closeBtn that can close the modal

    var btn = document.getElementById('clsBtn');

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    btn.onclick = function() {
        modal.className = 'modal animated fadeOutDown';
            setTimeout(() => {
                modal.style.display = 'none';
                modal.className = 'modal animated fadeInDown'
            }, 750);
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
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

