let buttonMas = document.querySelector(".button-mas");
let buttonMenos = document.querySelector(".button-menos")

let elementHora = document.querySelector(".reloj")
let horario, hour, minutes, seconds, reloj, interval;

let clickSuma, clickResta;
clickSuma = 0;
clickResta = 0;


function horaActualMas(){
  horario = new Date();
  hour = horario.getHours() + clickSuma;
 
  minutes = horario.getMinutes();
  seconds = horario.getSeconds();
  reloj = `${hour}:${minutes}:${seconds}s`;
 
   elementHora.innerHTML = reloj;
}

function horaActual(){

 horario = new Date();

 hour = horario.getHours()
 minutes = horario.getMinutes();
 seconds = horario.getSeconds();
 reloj = `${hour}:${minutes}:${seconds}s`;

  elementHora.innerHTML = reloj;
}



 interval = setInterval( horaActual,1000);


buttonMas.addEventListener('click', ()=>{
  clickSuma++;
  clearInterval(interval)
  setInterval(horaActualMas, 1000);
 
});


// buttonMenos.addEventListener('click', ()=>{
//   clickResta--;
//   clearInterval(interval)
//   setInterval(horaActualMenos, 1000);
// });




//  let fechaCumple = prompt(`¿Que mes cumples año?`);



