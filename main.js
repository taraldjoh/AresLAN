window.onload = start;

function start() {
    animate();
    document.querySelector(".scroll-effect").addEventListener("click", animate);
}

function animate() {
    $('html,body').animate({
        scrollTop: $(".box-1").offset().top - 25
    },'slow');
}