function fase1(){
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("enunciat").innerHTML = "Crea un array amb el teu nom on cada posició correspongui a una lletra. Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres ";
    var nom = new Array("A", "L", "E", "I", "X");
            var i = 0;
            for(i=0;i<nom.length;i++){
                console.log(nom[i]);
                document.getElementById("resultat").innerHTML += nom[i];
            }
}

function fase2(){
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("enunciat").innerHTML = 'Al bucle, si la lletra és una vocal imprimeix a la consola: "He trobat la VOCAL: __", sinó imprimeix: "He trobat la CONSONANT: __". Si trobes un número, mostra per pantalla: "Els noms de les persones no contenen el número: __".';
    var nom = new Array("A", "L", "E", "I", "X", "7");
            console.log("Partim del nom " + nom);
            var i = 0;
            for(i=0;i<nom.length;i++){
                if(nom[i] == "A" || nom[i] == "E" || nom[i] == "I" || nom[i] == "O" || nom[i] == "U" ){
                    console.log("He trobat la vocal " + nom[i]);
                    document.getElementById("resultat").innerHTML += "He trobat la vocal " + nom[i] + "<br>";
                }else if(!isNaN(nom[i])){
                    console.log("Els noms de les persones no contenen el número: " + nom[i]);
                    document.getElementById("resultat").innerHTML += "Els noms de les persones no contenen el número: " + nom[i] + "<br>" ;
                }else{
                    console.log("He trobat la consonant: " + nom[i]);
                    document.getElementById("resultat").innerHTML += "He trobat la consonant: " + nom[i] + "<br>" ;
                }
            }
}

function fase3(){
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("enunciat").innerHTML = "Emmagatzemar en un Map tant les lletres de la llista (o Array) com el nombre de vegades que hi apareixen:";
    var userName = new Array("A","L","E","I","X","A");
    var mapName = new Map();
    var newArray = new Array();
    console.log(userName);
    userName.map(function(letter){
        mapName[letter] = (mapName[letter] || 0 ) + 1; 
    });
    console.log(mapName);
   
}

function fase4(){
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("enunciat").innerHTML = "Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra. Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de la llista name i surname, i al acabar l'execució només tindrem una que es dirà fullName.";
    var nom = new Array("A", "L", "E", "I", "X", "7", "A", "X");
    var surname = new Array("T", "E", "L", "L", "O");
        console.log("Primer array: " + nom);
        document.getElementById("resultat").innerHTML += "Primer array: " + nom + "<br>";
        console.log("Segon array: " + surname);
        document.getElementById("resultat").innerHTML += "Segon array: " + surname + "<br>";
            
    nom.push(" "); //Afegir elements a l'array        
    var fullName = nom.concat(surname);
        console.log(fullName);
        document.getElementById("resultat").innerHTML += "Arrays concatenats: " + fullName;
}