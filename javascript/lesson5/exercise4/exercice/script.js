var table = ["https://i.pinimg.com/474x/fd/e6/b1/fde6b17f014fea2c372fa18ab03ed9b4--dog-smiling-card-ideas.jpg", "http://www.vitamin-ha.com/wp-content/uploads/2014/04/VH-Random-duckhourse.jpg", "http://kb4images.com/images/random-image/37670495-random-image.jpg", "http://saxony-blue.com/data/out/154/6565303-random-picture.jpg"];
// On créer un élément " ul " qu'on définit comme étant l'enfant de " body ".
var ul = document.createElement('ul');
document.body.appendChild(ul);
// Pour chaque élément présent dans " table ", on créer un " li " avec le contenu de l'index de l'array en définissant les " li " comme étant enfants de " ul ".
function list() {
    for (var i = 0; i < table.length; i++) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = table[i];
    }
}
list();