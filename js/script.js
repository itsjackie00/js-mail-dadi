// alert('funziona?');

/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

let esempio = 'mi chiamo jacqueline';
//console.log(esempio);




//console.log('Element = ' + document.getElementById('userEmail'));
//console.log('Value = ' + document.getElementById('userEmail').placeholder);
//console.log(userEmail)
let corretto = false;
let elButton = document.querySelector('.btn.btn-success');
//console.log(elButton);

let text = ['giovanni@gmail.com', 'valeria234@gmail.com', 'patrizzia@hotmail.com', 'frascotti12@yahoo.com'];

elButton.addEventListener('click', function () {
    let userEmail = (document.getElementById('userEmail'));
    console.log(userEmail);

    //console.log(userEmail.value);
    for (let i = 0; i < text.length; i++) {
        console.log(text[i],i);
        if (userEmail.value === text[i]) {
            corretto = true;
            console.log(userEmail);
            document.getElementById('result').innerHTML = 'Bevenuto';
        }
    }
    if (corretto === false) {
        document.getElementById('result').innerHTML = 'Non sei registrato';
    }


/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

if (corretto === true) {
    let computer = getRndInteger(1, 6);
    console.log(computer);
    let user = getRndInteger(1, 6);
    console.log(user);
    if (computer > user) {
        document.getElementById('message').innerHTML= `Computer is the winner !!! `;
        document.getElementById('numbers').innerHTML= `Computer choosed ${computer} user choosed ${user}`;
    } else if (computer === user) {
        document.getElementById('message').innerHTML= `Is a draw`;
        document.getElementById('numbers').innerHTML= `Computer choosed ${computer} user choosed ${user}`;

    } else {
        document.getElementById('message').innerHTML= `User is the winner  !!!`;
        document.getElementById('numbers').innerHTML= `Computer choosed ${computer} user choosed ${user}`;


    }
}

}
)







