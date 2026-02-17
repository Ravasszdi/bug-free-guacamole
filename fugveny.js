export function test(){
    let szoveg = "";
    for(let i = 0; i < 10; i++){
        szoveg += "*";
    }
    console.log(szoveg);
}

export function feladat(uzenetElem, lista){
    let szoveg = "<ul>";
    for(let i = 0; i < lista.length ;i++){
        szoveg += ("<li>"+lista[i]+"</li>")
    }
    szoveg += "</ul>";
    uzenetElem.innerHTML = szoveg;
}