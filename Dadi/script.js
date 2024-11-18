/* Dadi workflow
-creo due costanti per genereare i numeri casuali giocati dal pc e dal giocatore
-inserisco i numeri usciti in un array
-metto a confronto i numeri nell'array e genero il messaggio di output
*/

const min = 1;
const max =6;
const table =[];
let message=""

const numPlayer = Math.floor(Math.random() * (max - min + 1) + min);
const numPc = Math.floor(Math.random() * (max - min + 1) + min);
table.push(numPlayer);
console.log('Tuo numero: ',numPlayer);
table.push(numPc);
console.log('Numero PC: ',numPc);

if(numPlayer > numPc){
    message= 'hai vinto';
    
} else if (numPlayer < numPc){
    message = 'hai perso';
} else{
    message = 'pareggio'
}
console.log(message);

