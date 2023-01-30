const container = document.querySelector(".container");
const input = document.querySelector(".input-range");
const inputNum = document.querySelector(".input-number");

window.addEventListener("DOMContentLoaded", generateDivs(16));

input.addEventListener("change", (e)=>{
    const inputValue = parseInt(e.currentTarget.value);
    inputNum.textContent = `${inputValue} × ${inputValue}`
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