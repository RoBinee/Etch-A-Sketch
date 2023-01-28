//Create a webpage with a 16x16 grid of square divs
const container = document.querySelector(".container");

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const singleDiv = document.createElement("div");
        singleDiv.textContent = "div"
        container.appendChild(singleDiv);
    }
}