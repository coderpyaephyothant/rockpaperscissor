const computerChoiceTag = document.getElementById("computer-choice");
const containerTag = document.getElementById("container");
const mainContainerTag = document.getElementById("main-container");
const yourChoiceTag = document.getElementById("your-choice");
const resultTag = document.getElementById("result");
const buttonTag= document.querySelectorAll("button");
const resetTag = document.getElementById("reset");
const audioTag = document.getElementById("audioTag");
const okiTag = document.getElementById("oki");
const volumeHigh = document.getElementsByClassName("vol1")[0];
const volumeLow = document.getElementsByClassName("vol2")[0];
let seletedItem;
let computChoseItem;
let answer;

okiTag.addEventListener("click", ()=> {
    audioTag.play();
    mainContainerTag.classList.add("show2")
})

buttonTag.forEach((possibleChoice)=>{
    

possibleChoice.addEventListener("click", (event)=>{

seletedItem =  event.target.id;

yourChoiceTag.textContent = seletedItem;

computerIsChoosing();

finalResult();

});

});

const computerIsChoosing =  () => {

    const randomNumber = Math.floor(Math.random()*3+1);
    console.log(randomNumber);
    if(randomNumber ===1 ){
        computChoseItem = "papper"
    }else if (randomNumber === 2) {
        computChoseItem = "rock" 
    }else{
        computChoseItem = "scissor"
    }
    computerChoiceTag.textContent = computChoseItem;
}

  function finalResult () {
    if(computChoseItem === seletedItem){
        answer="We got the Same!"
    }
    if(computChoseItem === "rock" && seletedItem === "scissor"){
        answer="You Lost!"
    }
    if(computChoseItem === "rock" && seletedItem === "papper"){
        answer="You Lost!"
    }
    if(computChoseItem === "scissor" && seletedItem === "rock"){
        answer="You Win!"
    }
    if(computChoseItem === "papper" && seletedItem === "rock"){
        answer="You Win!"
    }
    if(computChoseItem=== "scissor" && seletedItem === "papper"){
        answer="You Lost!"
    }
    if(computChoseItem === "papper" && seletedItem === "scissor"){
        answer="You Win!"
    }
    resultTag.textContent = answer;
}

let isPlaying = true;

volumeHigh.addEventListener("click",()=>{
    isPlaying=false;
    showHideVolume();
    audioTag.pause();
})

volumeLow.addEventListener("click",()=>{
    isPlaying=true;
    showHideVolume();
    audioTag.play();
})

function showHideVolume () {
    if(isPlaying){
        volumeHigh.style.display = "inline";
        volumeLow.style.display = "none"
    }else{
        volumeLow.style.display="inline";
        volumeHigh.style.display="none";
    }
}



resetTag.addEventListener("click",()=>{
    resultTag.textContent="";
    yourChoiceTag.textContent="";
    computerChoiceTag.textContent="";
});




