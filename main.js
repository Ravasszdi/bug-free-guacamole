import { test,feladat } from "./fugveny.js";

let uzenetElem = document.getElementById("uzenet"); 
uzenetElem.innerHTML="Az élet szép?!";
const afa = 0.17;
console.log("az áfa " + afa)
let ar1 = 1000;
let araAfa = ar1 * afa;
console.log(araAfa);
test();
let a = 2;
let b = "3"
let fizetekAfat = false;
let lista = [1,20,2,3,4,6,21,632,462,2];
feladat(uzenetElem, lista);


function afasArak(){
    for (let i = 0; i < array.length; i++) {
        
    }
}