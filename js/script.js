var sort = document.getElementById("resultado")
var sort1 = document.getElementById("resultado1")
var sort2 = document.getElementById("resultado2")
var sort3 = document.getElementById("resultado3")
var sort4 = document.getElementById("resultado4")
var sort5 = document.getElementById("resultado5")
let sorteio = document.getElementById("sorteio").addEventListener("click", function sorteio(){
    
    setTimeout(() => {
       sort.innerHTML = Math.floor(Math.random() * 10)        
    }, 1000);
    setTimeout(() => {
        sort1.innerHTML = Math.floor(Math.random() * 10);
    }, 2000);
    setTimeout(() => {
        sort2.innerHTML = Math.floor(Math.random() * 10);
    }, 3000);
    setTimeout(() => {
        sort3.innerHTML = Math.floor(Math.random() * 10);
    }, 4000);
    setTimeout(() => {
        sort4.innerHTML = Math.floor(Math.random() * 10);
    }, 5000);
    setTimeout(() => {
        sort5.innerHTML = Math.floor(Math.random() * 10);
    }, 6000);

    
})

let reset = document.getElementById("reset").addEventListener("click", () => {
    sort.innerHTML = "-"
    sort1.innerHTML = "-"
    sort2.innerHTML = "-"
    sort3.innerHTML = "-"
    sort4.innerHTML = "-"
    sort5.innerHTML = "-"
})
