const container = document.querySelector(".container");
const inputForSize = document.querySelector("#input-size");
const sizeDesc = document.querySelector(".size-desc");
const colorInput = document.querySelector("#color-picker");

let pixelNum = 16;

window.addEventListener("DOMContentLoaded", generateDivs(pixelNum));

inputForSize.addEventListener("change", (e)=>{
    pixelNum = parseInt(e.currentTarget.value);
    sizeDesc.textContent = `${pixelNum} × ${pixelNum}`
    generateDivs(pixelNum)
})

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

    //can draw before button is clicked
    // setColorandEvent(colorInput.value);
}

colorInput.addEventListener("input", (e)=>{
    const userColor = e.currentTarget.value;
    // setColorandEvent(userColor);
})

function setColorandEvent(userColor){
    const divs = container.querySelectorAll("div");

    divs.forEach((div)=>{
        div.addEventListener("mouseover", ()=>{
            div.style.background = userColor;
        })
    })
}

const startBtn = document.querySelector(".brush");
const eraseBtn = document.querySelector(".eraser");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click",()=>{
    setColorandEvent(colorInput.value)
    //add event listener
})

eraseBtn.addEventListener("click", ()=>{
    setColorandEvent("#ffffff");
})

resetBtn.addEventListener("click", ()=>{
    const divs = container.querySelectorAll("div");

    divs.forEach((div)=>{
        div.style.background = "#ffffff"
    })
})