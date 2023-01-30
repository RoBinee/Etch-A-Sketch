//Create a webpage with a 16x16 grid of square divs
const container = document.querySelector(".container");
let numOfDiv = 16;

window.addEventListener("DOMContentLoaded", generateDivs(numOfDiv));


const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    const size = parseInt(prompt("Set the number of squares. Limit is 100"));
    //stypeof size is a string

    if(size >= 100 || !size){
        alert("Wrong input! size limit is 100 and type limit is number")
    }else{
        //go to the generate function
        generateDivs(size)
    }
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