const container = document.querySelector(".container");
const inputForSize = document.querySelector("#input-size");
const sizeDesc = document.querySelector(".size-desc");
const colorInput = document.querySelector("#color-picker");

const startBtn = document.querySelector(".brush");
const eraseBtn = document.querySelector(".eraser");
const resetBtn = document.querySelector(".reset");

let pixelNum = 16;
let userColor = colorInput.value;

// event listeners
window.addEventListener("DOMContentLoaded", generateDivs(pixelNum));

inputForSize.addEventListener("change", (e)=>{
    pixelNum = parseInt(e.currentTarget.value);
    sizeDesc.textContent = `${pixelNum} × ${pixelNum}`
    generateDivs(pixelNum)
})

colorInput.addEventListener("input", (e)=>{
    userColor = e.currentTarget.value;
})

startBtn.addEventListener("click",()=>{
    userColor = colorInput.value;
    setDivEvent()
})

eraseBtn.addEventListener("click", ()=>{
    userColor = "#ffffff"
    setDivEvent();
})

resetBtn.addEventListener("click", ()=>{
    generateDivs(pixelNum);
})

//functions

function generateDivs(num){
    container.innerHTML = ""

    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            const singleDiv = document.createElement("div");
            container.appendChild(singleDiv);
        }
    }
    container.style.gridTemplateColumns = `repeat(${num}, auto)`;
    container.style.gridTemplateRows = `repeat(${num}, auto)`;
}

function setDivEvent(){
    const divs = container.querySelectorAll("div");

    divs.forEach((div)=>{
        div.addEventListener("mouseover", ()=>{
            div.style.background = userColor;
        })
    })
}