//Create a webpage with a 16x16 grid of square divs
const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", setupDivs)

function setupDivs(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            const singleDiv = document.createElement("div");
            container.appendChild(singleDiv);
        }
    }

    const divs = container.querySelectorAll("div");

    divs.forEach((div)=>{
        div.addEventListener("mouseover", ()=>{
            div.style.background = "red";
        })
    })
}

const newSettingBtn = document.querySelector(".pixel-size");