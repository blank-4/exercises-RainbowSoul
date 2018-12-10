var a = document.createElement('a');
document.body.appendChild(a).innerHTML = "Print page";
a.setAttribute('href', 'https://google.com');
a.addEventListener("click", function(e) {
    window.print();
    e.preventDefault();
});