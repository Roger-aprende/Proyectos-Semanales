class horaActualOperacion {
    constructor(click){
        this.horario = new Date();
        this.hour = horario.getHours() + click;
       
        this.minutes = horario.getMinutes();
        this.seconds = horario.getSeconds();
        this.reloj = `${hour}:${minutes}:${seconds}s`;
       
         elementHora.innerHTML = reloj

    }
}


