const container = document.querySelector(".container");
const inputForSize = document.querySelector(".input-size");
const sizeNum = document.querySelector(".size-num");

window.addEventListener("DOMContentLoaded", generateDivs(16));

inputForSize.addEventListener("change", (e)=>{
    const inputValue = parseInt(e.currentTarget.value);
    sizeNum.textContent = `${inputValue} × ${inputValue}`
    generateDivs(inputValue)
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

    const divs = container.querySelectorAll("div");

    divs.forEach((div)=>{
        div.addEventListener("mouseover", ()=>{
            div.style.background = "red";
        })
    })
}