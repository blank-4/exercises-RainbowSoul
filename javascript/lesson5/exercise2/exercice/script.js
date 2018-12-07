function whenCalled() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    div.style.width = "200px";
    div.style.height = "400px";
    div.style.backgroundColor = "white";
    div.onmouseover = function() {
        div.style.backgroundColor = "blue";
    }
    div.onmouseout = function() {
        div.style.backgroundColor = "white";
    }
}
whenCalled();