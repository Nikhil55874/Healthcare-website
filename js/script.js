let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// Get modal element
var modal = document.getElementById("login-modal");

// Get open modal button
var loginBtn = document.getElementById("login-btn");

// Get close button
var closeBtn = document.getElementById("close-login-modal");

// Listen for open click
loginBtn.onclick = function() {
    modal.style.display = "flex";
}

// Listen for close click
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Listen for outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
