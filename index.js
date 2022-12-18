"use strict";
let homeScore=document.getElementById("home-state-score");
let guest = document.getElementById("guest-state-score");

let scoreH = 0;
let scoreG = 0

function gAddOne(){
    scoreG += 1  
    guest.textContent=scoreG
}
function hAddOne(){
    scoreH += 1  
    homeScore.textContent=scoreH
}
function gAddTwo(){
    scoreG += 2 
    guest.textContent=scoreG
}
function hAddTwo(){
    scoreH += 2  
    homeScore.textContent=scoreH
}
function gAddThree(){
    scoreG += 3  
    guest.textContent=scoreG
}
function hAddThree(){
    scoreH += 3  
    homeScore.textContent=scoreH
}

function newGameBtn(){
   homeScore.textContent=0;
   guest.textContent=0
   scoreH=0;
   scoreG=0;
    
}








