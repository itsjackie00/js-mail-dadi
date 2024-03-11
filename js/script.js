// alert('funziona?');

/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


let userEmail = 'giovanni@gmail.com'.toLowerCase();
let corretto = false;


let text = ['giovanni@gmail.com', 'valeria234@gmail.com', 'patrizzia@hotmail.com', 'frascotti12@yahoo.com'];
for (let i = 0; i < text.length; i++) {
    if (userEmail === text[i]) {
        corretto = true;
        console.log('Benvenuto');
    }
}
if (corretto === false) {
    console.log('Non sei registrato');  
}

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

if (corretto === true) {
    let computer =  getRndInteger(1,6); 
    console.log(computer);
    let user =  getRndInteger(1,6);
    console.log(user);
    if (computer > user){
        console.log('Computer is the winner');
    }else if(computer === user){
        console.log('Draw');
    } else{
        console.log('User is the winner');
    }
}




