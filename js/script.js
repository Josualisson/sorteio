let sorteio = document.getElementById("sorteio").addEventListener("click", function sorteio(){
    
    setTimeout(() => {
       var sort = document.getElementById("resultado")
       sort.innerHTML = Math.floor(Math.random() * 10)        
    }, 1000);
    setTimeout(() => {
        document.getElementById("resultado1").innerHTML = Math.floor(Math.random() * 10);
    }, 2000);
    setTimeout(() => {
        document.getElementById("resultado2").innerHTML = Math.floor(Math.random() * 10);
    }, 3000);
    setTimeout(() => {
        document.getElementById("resultado3").innerHTML = Math.floor(Math.random() * 10);
    }, 4000);
    setTimeout(() => {
        document.getElementById("resultado4").innerHTML = Math.floor(Math.random() * 10);
    }, 5000);
    setTimeout(() => {
        document.getElementById("resultado5").innerHTML = Math.floor(Math.random() * 10);
    }, 6000);


    
})
