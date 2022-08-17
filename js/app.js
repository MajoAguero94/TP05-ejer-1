function crearNumero(){
    let numeroNuevo = document.querySelector("#numero");
    numeroNuevo = Math.floor(Math.random() * (99 - 10 + 1) + 1);
    console.log(numeroNuevo)

    
      let numeroUsuario = document.getElementById("usuarioNumero").value;
      console.log(numeroUsuario)
   
   
   if(numeroNuevo === numeroUsuario){
      alert("GANASTE!!! el numero que ingresaste es igual que el GANADOR")
   }else if (numeroNuevo > numeroUsuario){
     alert("El numero que ingresaste es menor al numero GANADOR")
   }else{
     alert("El numero que ingresaste es mayor al GANADOR")
   }
 }
 