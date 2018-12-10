var request = new XMLHttpRequest();
request.open("GET", "data.json", true);
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var content = this.responseText;
        var jsobject = JSON.parse(content);
        console.log(jsobject.records[0].fields);
        for (var i = 0; i < jsobject.records.length; i++) {
            var section = document.createElement("section");
            document.body.appendChild(section);
            section.innerHTML = "Rue : " + jsobject.records[i].fields.ap_num + " " + jsobject.records[i].fields.ap_voie + "</br>" + "Nom Piscine : " + jsobject.records[i].fields.designation_longue + "</br>" + "Mairie : " + jsobject.records[i].fields.mairie_gestionnaire + "</br>" + "Code Postal : " + jsobject.records[i].fields.ap_cp + "</br>" + "</br>";
            // Autre syntaxe proposée par Jérémy ( J'y ai pas pensé au départ ).
            // var a = jsobject.records[i].fields.ap_num;
            // var b = jsobject.records[i].fields.ap_voie;
            // var c = jsobject.records[i].fields.designation_longue;
            // var d = jsobject.records[i].fields.mairie_gestionnaire;
            // var e = jsobject.records[i].fields.ap_cp;
            // section.innerHTML = a + b + "</br" + c + "</br" + d + "</br" + e;
        }
    }
};
request.send();