// Déclarations
const go = document.getElementById('go');
const game = document.getElementById('game');
var action;
var ordi = document.getElementById('ordi');
var shifumi = document.querySelectorAll('.shifumi');
const pierre = document.getElementById('pierre');
const feuille = document.getElementById('feuille');
const ciseaux = document.getElementById('ciseaux');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
var play;
var nbGamesCount = 0;
var winsCount = 0;
var loosesCount = 0;
var currentstreak = 0;
var beststreak = 0;
const nbGames = document.getElementById('nbGames');
const nbGames2 = document.getElementById('nbGames2');
const winsLooses = document.getElementById('winsLooses');
const winsLooses2 = document.getElementById('winsLooses2');
const streaks = document.getElementById('streaks');
const streaks2 = document.getElementById('streaks2');
const best = document.getElementById('best');
const best2 = document.getElementById('best2');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Fin Déclarations

// Ecran d'accueil

go.onclick = () => {
    go.classList.add('d-none');
    game.classList.remove('d-none');
}

// Fin Ecran d'accueil

// Jeu V1
// Pierre = 0 ; Feuille = 1 ; Ciseaux = 2
// pierre.onclick = () => {
//     let play = getRandomInt(3);
//     if (play == 0) {
//         action = "Egalité !";
//         ordi.innerHTML = '<img src="assets/img/pierre.jpg" alt="Pierre">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Pierre !</p>"
//     } else if (play == 1) {
//         action = "Défaite !";
//         ordi.innerHTML = '<img src="assets/img/feuille.jpg" alt="Feuille">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Feuille !</p>"
//         loosesCount++;
//         winsLooses2.innerHTML = `${winsCount}/${loosesCount}`
//     } else {
//         action = "Victoire !";
//         ordi.innerHTML = '<img src="assets/img/ciseaux.jpg" alt="Ciseaux">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Ciseaux !</p>"
//         winsCount++;
//         winsLooses2.innerHTML = `${winsCount}/${loosesCount}`
//     }
//     result2.innerHTML = action;
//     nbGamesCount++;
//     nbGames2.innerHTML = nbGamesCount;
//     if (action == "Victoire !") {
//         currentstreak++;
//         streaks2.innerHTML = currentstreak;
//     } else if (action == "Défaite !") {
//         currentstreak = 0;
//         streaks2.innerHTML = currentstreak;
//     }
//     if (currentstreak>beststreak) {
//         beststreak = currentstreak;
//         best2.innerHTML = beststreak;
//     }
// }

// feuille.onclick = () => {
//     let play = getRandomInt(3);
//     if (play == 0) {
//         action = "Victoire !";
//         ordi.innerHTML = '<img src="assets/img/pierre.jpg" alt="Pierre">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Pierre !</p>"
//         winsCount++;
//         winsLooses2.innerHTML = `${winsCount}/${loosesCount}`
//     } else if (play == 1) {
//         action = "Egalité !";
//         ordi.innerHTML = '<img src="assets/img/feuille.jpg" alt="Feuille">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Feuille !</p>"
//     } else {
//         action = "Défaite !";
//         ordi.innerHTML = '<img src="assets/img/ciseaux.jpg" alt="Ciseaux">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Ciseaux !</p>"
//         loosesCount++;
//         winsLooses2.innerHTML = `${winsCount}/${loosesCount}`
//     }
//     result2.innerHTML = action;
//     nbGamesCount++;
//     nbGames2.innerHTML = nbGamesCount;
//     if (action == "Victoire !") {
//         currentstreak++;
//         streaks2.innerHTML = currentstreak;
//     } else if (action == "Défaite !") {
//         currentstreak = 0;
//         streaks2.innerHTML = currentstreak;
//     }
//     if (currentstreak>beststreak) {
//         beststreak = currentstreak;
//         best2.innerHTML = beststreak;
//     }
// }

// ciseaux.onclick = () => {
//     let play = getRandomInt(3);
//     if (play == 0) {
//         action = "Défaite !";
//         ordi.innerHTML = '<img src="assets/img/pierre.jpg" alt="Pierre">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Pierre !</p>"
//         loosesCount++;
//         winsLooses2.innerHTML = `${winsCount}/${loosesCount}`
//     } else if (play == 1) {
//         action = "Victoire !";
//         ordi.innerHTML = '<img src="assets/img/feuille.jpg" alt="Feuille">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Feuille !</p>"
//         winsCount++;
//         winsLooses2.innerHTML = `${winsCount}/${loosesCount}`
//     } else {
//         action = "Egalité !";
//         ordi.innerHTML = '<img src="assets/img/ciseaux.jpg" alt="Ciseaux">'
//         result3.innerHTML = "<p>L'ordinateur à joué: Ciseaux !</p>"
//     }
//     result2.innerHTML = action;
//     nbGamesCount++;
//     nbGames2.innerHTML = nbGamesCount;
//     if (action == "Victoire !") {
//         currentstreak++;
//         streaks2.innerHTML = currentstreak;
//     } else if (action == "Défaite !") {
//         currentstreak = 0;
//         streaks2.innerHTML = currentstreak;
//     }
//     if (currentstreak>beststreak) {
//         beststreak = currentstreak;
//         best2.innerHTML = beststreak;
//     }
// }

// Fin Jeu V1

// Jeu V2

//Choix du Joueur
pierre.addEventListener('click', () => {
    play = getRandomInt(3);
    if (play == 0) {
        action = "Egalité !";
    } else if (play == 1) {
        action = "Défaite !";
    } else {
        action = "Victoire !";
    }
})

feuille.addEventListener('click', () => {
    play = getRandomInt(3);
    if (play == 0) {
        action = "Victoire !";
    } else if (play == 1) {
        action = "Egalité !";
    } else {
        action = "Défaite !";
    }
})

ciseaux.addEventListener('click', () => {
    play = getRandomInt(3);
    if (play == 0) {
        action = "Défaite !";
    } else if (play == 1) {
        action = "Victoire !";
    } else {
        action = "Egalité !";
    }
})

//Fin Choix du joueur

// Choix de l'ordi
shifumi.forEach(element => {
    element.addEventListener('click', function() {
        if (play == 0) {
            ordi.innerHTML = '<img src="assets/img/pierre.jpg" alt="Pierre">'
            result3.innerHTML = "<p>L'ordinateur a joué: Pierre !</p>"
        } else if (play == 1) {
            ordi.innerHTML = '<img src="assets/img/feuille.jpg" alt="Feuille">'
            result3.innerHTML = "<p>L'ordinateur a joué: Feuille !</p>"
        } else {
            ordi.innerHTML = '<img src="assets/img/ciseaux.jpg" alt="Ciseaux">'
            result3.innerHTML = "<p>L'ordinateur a joué: Ciseaux !</p>"
        }
    })
})

// Fin Choix de l'ordi

// Résultats
shifumi.forEach(element => {
    element.addEventListener('click', () => {
        result2.innerHTML = action;
        nbGamesCount++;
        nbGames2.innerHTML = nbGamesCount;
        if (action == "Victoire !") {
            winsCount++;
            currentstreak++;
        } else if (action == "Défaite !") {
            loosesCount++;
            currentstreak = 0;
        }
        winsLooses2.innerHTML = `${winsCount}/${loosesCount}`;
        streaks2.innerHTML = currentstreak;
        if (currentstreak>beststreak) {
            beststreak = currentstreak;
            best2.innerHTML = beststreak;
        }
    })
})

// Fin Résultats
//Fin Jeu V2