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
