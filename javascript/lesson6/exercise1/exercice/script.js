function timer() {
        var p = document.getElementById("horloge");
        var get = new Date();
        p.innerHTML = get;
}
setInterval(timer, 1000);