//importante el archivo importado debe llevar ./ (Esto no autocompleta)
import { getData } from "./services.js";
const personajes = await getData();

const tarjet = document.getElementById('block');

// Fijate bien en la estructura dentro de la consola. para que puedas menejarlo con comodidad
// console.log(personajes)

let mainOne = document.querySelector('.main-one');
let mainSeconds = document.querySelector('.main-seconds');

mainOne.innerHTML = `
<div class="card">
  <img src="${personajes[0].image}" alt="${personajes[0].id}" class="card__img">  
   <div class="card__blocktext">
      <p class="card__name"> ${personajes[0].name}</p>
      <p class="card__gender"> ${personajes[0].gender}</p>
   </div>
</div>
`;


mainSeconds.innerHTML = `
<div class="card">
  <img src="${personajes[1].image}" alt="${personajes[1].id}" class="card__img"> 
    <div class="card__blocktext"> 
      <p class="card__name"> ${personajes[1].name} </p>
      <p class="card__gender"> ${personajes[1].gender} </p>
      </div>
  </div>
`;

for(let i = 2; i<= personajes.length; i++){
  tarjet.innerHTML += `
  <div class="card">
    <img src="${personajes[i].image}" alt="${personajes[i].id}" class="card__img"/>
      <div class="card__blocktext">
        <p class="card__name"> ${personajes[i].name} </p>
        <p class="card__gender"> ${personajes[i].gender}</p>
      </div>
  </div>`
}