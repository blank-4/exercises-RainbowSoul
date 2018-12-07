var a = document.createElement('a');
document.body.appendChild(a).innerHTML = "Print page";
a.setAttribute('href', 'https://google.com');
a.setAttribute('onclick', 'printPage()');
function printPage() {
    window.print();
}