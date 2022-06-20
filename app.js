let blocksPerPage = 16;
let div = document.querySelector('.grid-container');

let createCanvas = (blocksPerPage) => {
for(let i = 0; i < blocksPerPage; i++){
let grid = document.createElement('div');
grid.className = 'grid-item';
div.appendChild(grid);
}
}

let startColoring = (e) => {
    if (e.target !== e.currentTarget) {
        e.target.style.background = 'black';
    }
    e.stopPropagation();
}

let clear = (e) => {
    if (e.target !== e.currentTarget) {
        e.target.style.background = 'white';
    }
    e.stopPropagation();
}

let reloadWindow = () => {
    location.reload();
}

let eraser = () => {
    grid-container.addEventListener("mouseover", clear);
}

let startBlack = () => {
    grid-container.addEventListener("mouseover", startColoring);
}

let startSketch = () => {
    let button = document.createElement("button");
    button.textContent = "Start";
    let btn = document.getElementById("start")
    btn.appendChild(button);
    button.addEventListener("click", startBlack);
    createCanvas(blocksPerPage);
}

let reset = () => {
    let button1 = document.createElement("button");
    button1.textContent = "Reload";
    let btn1 = document.getElementById("reload");
    btn1.appendChild(button1)
    button1.addEventListener("click", reloadWindow);
    createCanvas(blocksPerPage);
}

let erase = () => {
    let button2 = document.createElement("button");
    button2.textContent = "Erase";
    let btn2 = document.getElementById("eraser");
    btn2.appendChild(button2);
    button2.addEventListener("click", eraser);
    createCanvas(blocksPerPage);
}

reset();
erase();
startSketch();