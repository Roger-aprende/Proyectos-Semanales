//importante el archivo importado debe llevar ./ (Esto no autocompleta)
import { getData } from "../js/services.js";
const personajes = await getData();

const blockTarjet = document.getElementById('block-tarjet');


let mainContainer = document.querySelector('.container');
for(let i = 0; i <= 1; i++){
mainContainer.innerHTML += `
<div class="card" data-index="${i}">
  <img src="${personajes[i].image}" alt="${personajes[i].id}" class="img">  
   <div class="blocktext">
      <p class="name"> ${personajes[i].name}</p>
      <p class="gender"> ${personajes[i].gender}</p>
   </div>
</div>
`};

// personajes[i].id
for(let i = 2; i< personajes.length; i++){
  blockTarjet.innerHTML += `
  <div class="card" data-index="${i}">
    <img src="${personajes[i].image}" alt="${personajes[i].id}" class="img">
      <div class="blocktext">
        <p class="name"> ${personajes[i].name} </p>
        <p class="gender"> ${personajes[i].gender}</p>
      </div>
  </div>`
};


let card = document.querySelectorAll('.card');
let modal = document.querySelector("dialog");
let btmClose = document.querySelector('#btm-close')
let pleopleImg = document.querySelector('.modal-img');
let pleopleName = document.querySelector('.modal-name');
let pleopleGender = document.querySelector('.modal-gender');
let pleopleEstado = document.querySelector('.modal-estado');
let pleopleSpecie = document.querySelector('.modal-specie');
// name gender estado specie img

card.forEach(cv=>{
  cv.addEventListener('click', ()=>{
    pleopleImg.src = `${personajes[cv.dataset.index].image}`;
    pleopleName.innerHTML = ` Nombre:  ${personajes[cv.dataset.index].name}`;
    pleopleGender.innerHTML = ` Sexo:  ${personajes[cv.dataset.index].gender}`;
    pleopleEstado.innerHTML = ` Estado:  ${personajes[cv.dataset.index].status}`;
    pleopleSpecie.innerHTML = ` Especie:  ${personajes[cv.dataset.index].species}`;


   modal.classList.add('modal');
   modal.showModal();
  });

  btmClose.addEventListener('click', ()=>{
    modal.classList.remove('modal')
    modal.close();
  });

});




