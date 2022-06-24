const createCanvas = (blocksPerPage) => {
    let container = document.querySelector('#grid-container');
    let blocks = container.querySelectorAll('div');
    blocks.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${blockPerPage}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${blocksPerPage}, 1fr)`;


    let amount = blocksPerPage * blocksPerPage;
    for(let i = 0; i < amount; i++){
        let block = document.createElement('div');
        block.style.backgroundColor = 'white';
        container.insertAdjacentElement('beforeend', block);
    }
}

createCanvas(16);

let changeSize = (input) => {
    if(input >= 2 || input <= 100){
        document.querySelector(".error").style.display = "none";
        createCanvas(input);
    }else{
        document.querySelector(".error").style.display = "flex";
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
    container.addEventListener('mouseover', clear);
}

let startBlack = () => {
    container.addEventListener('mouseover', startColoring);
}

let startSketch = () => {
    let button = document.createElement('button');
    button.textContent = 'Start';
    let btn = document.getElementById('start')
    btn.appendChild(button);
    button.addEventListener('click', startBlack);
    createCanvas();
}

let reset = () => {
    let button1 = document.createElement('button');
    button1.textContent = 'Reload';
    let btn1 = document.getElementById('reload');
    btn1.appendChild(button1)
    button1.addEventListener('click', reloadWindow);
    createCanvas();
}

let erase = () => {
    let button2 = document.createElement('button');
    button2.textContent = 'Erase';
    let btn2 = document.getElementById('eraser');
    btn2.appendChild(button2);
    button2.addEventListener('click', eraser);
    createCanvas();
}

reset();
erase();
startSketch();