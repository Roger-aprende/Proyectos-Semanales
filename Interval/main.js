let title = document.getElementById("title");
let buttonPlay = document.getElementById("button-play");
let buttonStop = document.getElementById("button-pausa");
let interval;

function colors(){
    if(title.classList.contains("seconds-color")){
     title.classList.remove("seconds-color")
    }

    else title.classList.add("seconds-color");
};

buttonPlay.addEventListener('click', () =>{
    if(!buttonPlay.classList.contains("play")){
        buttonPlay.classList.add("play");
        interval = setInterval(colors, 2000);
    }
});

buttonStop.addEventListener('click',()=>{
    if(buttonPlay.classList.contains("play")){
        buttonPlay.classList.remove("play");
        clearInterval(interval);
    }
})


