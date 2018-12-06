var a = document.createElement('a');
document.body.appendChild(a).innerHTML = "Print page";
a.setAttribute('href', '#');
a.setAttribute('onclick', 'printPage()');
function printPage() {
    window.print();
}