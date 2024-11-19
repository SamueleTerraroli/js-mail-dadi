/* Mail workflow:
-creiamo un promprt dove l'utente andrà ad inserire la sua mail
- la mail se non già presente verrà inserita in un array
- se la mail è già presente verrà visualizzato un messaggio di bentornato, in alternativa di benvenuto.
*/

const mailList = ['terraroli@gmail.com'];

let mail = prompt("inserisci qui latua mail");

let mailAlreadyExists = false;

 let message="";

if( mailAlreadyExists = mailList.includes(mail)){
    mailAlreadyExists = true;
    message = 'Bentornato';
    console.log(message, mail);
    
}else{
    mailList.push(mail);
    message = 'benvenuto';
    console.log(message, mail)
}
console.log(mailList);

//Correzione
/*
passaggi:
- Salvare in una variabile il prompt dell'utente
- Con un ciclo for verifico la presenza o meno della mail inserita (non utilizzo includes)
-generazione del messaggio di output

const emails = [
ugo@
samuele@
gfianni@
]

const emailUtente = prompt('inserisci la tua email');
console.log(emailUtente);
let emailTrovata = false;

for(let i=0; i<emails.length; i++){
    const email= emails[i];
    if(email===emailUtente){
    emailTrovata=true;
    }
if(emailTrovata){
    meddage= 'puoi entrare'      
} else{
 message= 'non puoi entrare'
}
}

N.b in una situazione standard in questo caso si utilizzerebbe includes per verificare la presenza o meno della mail nell'array
o in alternativa una funzione regex
*/
