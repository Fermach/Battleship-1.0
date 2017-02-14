var segundos;
var myTimer;


function crearPartida(){
    // crear una matriz de fil x col
    tablero = crearMatriz(filas,columnas);
    // rellenar la matriz "a"
    inicializaMatriz('a',tablero);
    colocarBarcos(tablero);
    generarTablerojQ();
    
    // PONEMOS LOS SEGUNDOS AL TIEMPO DE PARTIDA
    segundos= 60;// un minuto
    // ARRANCAMOS EL TIMER!!! -> con setInterval()
    myTimer= setInterval(funcionCallBack, 1000);
    
    // volcar la matriz a consola
    matriz2console(tablero);
}

function callbackTimer(){
    // actualizar el tiempo que queda
     segundos--;
    document.getElementById("demo").innerHTML = segundos+" seg";
    // si el tiempo es <= 0 para el timer clearInterval() y acaba la partida
  
    if(segundos<= 0){
        
      clearInterval(myTimer);  
    }    //el contador se limpiará cada minuto
        
}