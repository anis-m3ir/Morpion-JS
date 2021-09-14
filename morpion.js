//recuperation du module readline-sync
var readline = require("readline-sync");
var tour = 1;
var fin = false;
var nbCel = 9;
//tableau a 2 dimmensions 

var morpion = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

afficherGrille(morpion);

while(!fin && nbCel >0){
    var positionOk = false;
    
    while(!positionOk){
        console.log("-------------------");
        console.log("Quelle position voulez-vous");
        console.log("-------------------");
        var ligneSaisie = readline.question("Ligne : ");
        var colonneSaisie = readline.question("colonne : ");
        positionOk = verification(ligneSaisie,colonneSaisie,morpion);
        if(!positionOk) {console.log("****Choisir une posotion valide***")};
    }
    
    morpion[ligneSaisie-1][colonneSaisie-1] = tour;
    nbCel-- ;
    
    afficherGrille(morpion);
    fin = verifEndGame(morpion);
    if(fin){
        console.log("BRAVO joueur %d a gagné ",tour);
    }
    (tour===1) ? tour=2 : tour=1;
}

if(nbCel === 0) console.log("Personne na pu gagner !");



//affichage du tableau
function afficherGrille(tab){
    for(var i = 0 ; i < tab.length ; i++){
        var txt = "";
        for(var j=0 ; j < tab[i].length ; j++){
            if(tab[i][j] === 0){
                txt += "| |";  //tab[i][j]
            }
            else if(tab[i][j] === 1){
                txt += "|x|";
            }else if(tab[i][j] === 2){
                txt += "|o|";
            }

        }
        console.log(txt);
    }
}

function verification(ligneSaisie,colonneSaisie,morpion){
    return ligneSaisie >= 1 && ligneSaisie <=3 && colonneSaisie >=1 && colonneSaisie <=3 && morpion[ligneSaisie-1][colonneSaisie-1]===0;
}

function verifEndGame(tab){
    for(var i = 0; i < tab.length ; i++){
        if(tab[i][0] === tab[i][1] && tab[i][0] === tab[i][2] && tab[i][0] !== 0) return true;
        if(tab[0][i] === tab[1][i] && tab[0][i] === tab[2][i] && tab[0][i] !== 0) return true;

    }
    if(tab[0][0] === tab[1][1] && tab[0][0] === tab[2][2] && tab[0][0] !== 0) return true;
    if(tab[2][0] === tab[1][1] && tab[2][0] === tab[1][2] && tab[2][0] !== 0) return true;
}
