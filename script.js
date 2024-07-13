let container = document.querySelector("#container");
let boxBtn = document.querySelector("#boxesPerSide");
let boxesPerSide = 16;
let rgbInts;

createGrid(boxesPerSide);

boxBtn.addEventListener("click", () => {
    boxesPerSide = getBoxesPerSide();
    if (boxesPerSide <= 100) {
        createGrid(boxesPerSide);
    }
    else {
        alert('Please enter a number below 100. Otherwise your browser will crash');
        getBoxesPerSide();
    }
});

function getRGBInt() {
    return Math.random() * 255;
}

function getBoxesPerSide() {
    return parseInt(prompt("Enter number of boxes per side (between 1 and 100): "));
}

function createGrid(boxesPerSide) {
    container.innerHTML = '';
    for (let m = 1; m <= boxesPerSide; m++) {
        let tempRow = document.createElement("div");
        tempRow.classList.add("row", `rowNumber${m}`);
        if (m === boxesPerSide) {
            tempRow.classList.add("rowLast");
        }
        for (let n = 1; n <= boxesPerSide; n++) {
            let tempDiv = document.createElement("div");
            tempDiv.classList.add("box", `boxNumber${m}${n}`);
            tempRow.appendChild(tempDiv);
        }
        container.appendChild(tempRow);
    }

    rgbInts = [getRGBInt(), getRGBInt(), getRGBInt()];

    let boxesList = document.querySelectorAll(".box");
    boxesList.forEach(box => {
        box.addEventListener('mouseover', turnDarker);
        box.style.backgroundColor = `rgba(${rgbInts[0]}, ${rgbInts[1]}, ${rgbInts[2]}, 0.02)`;
    });
}

function turnDarker(event) {
    let stl = event.target.style;
    let oldOpacity = parseFloat(stl.backgroundColor.slice(-5, -1));
    let newOpacity;
    console.log(stl.backgroundColor, oldOpacity);
    if (oldOpacity !== 0) {
        newOpacity = oldOpacity < 0.7 ? oldOpacity + 0.33 : 1;
        stl.backgroundColor = `rgba(${rgbInts[0]}, ${rgbInts[1]}, ${rgbInts[2]}, ${newOpacity})`;
    }
    stl.borderColor = stl.backgroundColor;
}