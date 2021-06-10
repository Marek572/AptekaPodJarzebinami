var content = document.getElementsByClassName("content")[0];
var button = document.getElementById("zoom");
var zoom = false;

function sizeUp(){
    if(zoom){
        content.style.fontSize="18px";//wartość bez zooma
        button.innerHTML="Większe Litery"
        zoom = false;
       }
       else{
        content.style.fontSize="25px";//wartość z zoomem
        button.innerHTML="Mniejsze Litery"
        zoom = true;
       }
}


let qwe = document.getElementById('mobileNav');
let txt = document.getElementsByClassName('mobileLink');
let state = false;

function expandNav(){

    if(state){
        state = false;
        qwe.style.animation = 'collapse 2s forwards';
        for(let i = 0; i<3; i++){
            txt[i].style.animation="fadeOut 0.5s forwards";
        }
    }
    else{
        state = true;
        qwe.style.animation = 'expand 2s forwards';
        for(let i = 0; i<3; i++){
            txt[i].style.animation="fadeIn 1s 0.5s forwards";
        }
    }
}

window.addEventListener("resize", ()=>{

    if(window.innerWidth>768){
        qwe.style.animation = 'collapse 2s forwards';
        for(let i = 0; i<3; i++){
            txt[i].style.animation="fadeOut 0.5s forwards";
        }
    }

});


let i = 0;

let hA0 = document.getElementById('bg1');
let hA1 = document.getElementById('bg2');
let hA2 = document.getElementById('bg3');
hA0.style.animation = 'fadeIn 0.3s 1 forwards';
hA1.style.animation = 'fadeOut 0.1s 1 forwards';
hA2.style.animation = 'fadeOut 0.1s 1 forwards';

setInterval(() => {

    if(i==0){
        hA0.style.animation = 'fadeOut 0.8s 1 forwards';
        hA1.style.animation = 'fadeIn 1s 1 forwards';
    }
    else if(i==1){
        hA1.style.animation = 'fadeOut 0.8s 1 forwards';
        hA2.style.animation = 'fadeIn 1s 1 forwards';

    }
    else if(i==2){
        hA2.style.animation = 'fadeOut 0.8s 1 forwards';
        hA0.style.animation = 'fadeIn 1s 1 forwards';

    }

    i++
    if(i==3){
        i=0
    }

}, 3000);