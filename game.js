"use strict";

function game() {
    let randomkvdr= Math.floor(Math.random() * (91-10)+10);
    for (let i=1; i<randomkvdr; i++) {
        let kvadratelis;
        let masyvas =[];
        let br;
        masyvas.push(i);
        console.log(masyvas);
        kvadratelis = document.createElement('div');
        kvadratelis.classList.add('design');
        kvadratelis.classList.add('el'+masyvas[0]);
        document.querySelector('.game').appendChild(kvadratelis);
        if (i%3==0) {
            br = document.createElement('br');
            document.querySelector('.game').appendChild(br);
        }
    }




const element = document.querySelectorAll('.design');
element.forEach(function(el){
  el.addEventListener('click', function () {
    this.style.background = "red";
  });
});

let laimetojas = Math.floor(Math.random() * (randomkvdr-1) +1);
console.log(laimetojas);



document.querySelector('.el'+laimetojas).addEventListener('click', function(){
    this.style.background = "green";
});

}

window.onload=game;

document.querySelector('.button').addEventListener('click', function(){
    const newgame = document.querySelector('.game');
    newgame.remove();
    let startnew;
    startnew = document.createElement('div');
    startnew.classList.add('game');
    document.querySelector('.top').appendChild(startnew);
    game.call(this);

});