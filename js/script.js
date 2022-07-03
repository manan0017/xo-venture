// script for sticky header

window.onscroll = function () { myFunction() };

var header = document.getElementById("header_content");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
