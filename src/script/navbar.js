const lgLinks = document.getElementById("lg-links");
const smLinks = document.getElementById("sm-links");
const open = document.getElementById("open");
const close = document.getElementById("close");


window.onload = updateState();
window.addEventListener('resize', () => updateState());

open.addEventListener('click', () => toggleFold());
close.addEventListener('click', () => toggleFold());

function updateState() {

    if(window.innerWidth <= 1024) {
        lgLinks.style.display = "none";

        if(smLinks.style.display == "flex") {
            close.style.display = "block";
        } else {
            open.style.display = "block";
        }
        
    } else {
        lgLinks.style.display = "flex";
        smLinks.style.display = "none";
        open.style.display = "none";
        close.style.display = "none";
    }
}

function toggleFold() {

    if(smLinks.style.display != "flex") {
        open.style.display = "none";
        close.style.display = "block";
        smLinks.style.display = "flex";
    } else  {
        open.style.display = "block";
        close.style.display = "none";
        smLinks.style.display = "none";
    }
}