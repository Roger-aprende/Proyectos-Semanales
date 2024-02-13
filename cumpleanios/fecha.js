 ///Fecha//////
 let elementFecha = document.querySelector('.fecha');

 let year;
 let month;
 let day;
 let dayNum;
 let calendario;

 let  arrayMonth = ["enero","febrero","marzo","abril","mayo","junio",
 "julio","agosto","septiembre","octubre","noviembre","diciembre"];

 let arrayDays = ['domingo','lunes','martes','miercoles','jueves', 'viernes', 'sabado'];


 function fechaActual(){
     horario = new Date();

     day = horario.getDay();
     dayNum = horario.getDate(); //Forma de obtener el dia del mes
     month = horario.getMonth();
     year = horario.getFullYear();

     dayNum = horario.getDate();
     calendario = `Hoy es ${arrayDays[day]} ${dayNum} de ${arrayMonth[month]} del ${year}`;

     elementFecha.innerHTML = calendario;
}