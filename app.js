//Create a webpage with a 16x16 grid of square divs
const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", generateDivs(16));

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

const input = document.querySelector(".input-range");

input.addEventListener("change", (e)=>{
    const inputValue = parseInt(e.currentTarget.value);
    generateDivs(inputValue)
})