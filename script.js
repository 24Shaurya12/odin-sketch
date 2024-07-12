let container = document.querySelector("#container");
let boxBtn = document.querySelector("#boxesPerSide");

boxBtn.addEventListener("click", () => {
    createGrid(getBoxesPerSide());
});

function getBoxesPerSide() {
    return prompt("Enter number of boxes per side (between 1 and 100): ");
}

function createGrid(boxesPerSide) {
    container.innerHTML = '';
    for (let m = 1; m <= boxesPerSide; m++) {
        tempRow = document.createElement("div");
        tempRow.classList.add("row", `rowNumber${m}`);
        if (m === boxesPerSide) {
            tempRow.classList.add("rowLast");
        }
        for (let n = 1; n <= boxesPerSide; n++) {
            tempDiv = document.createElement("div");
            tempDiv.classList.add("box", `boxNumber${m}${n}`);
            tempRow.appendChild(tempDiv);
        }
        container.appendChild(tempRow);
    }

    let boxesList = document.querySelectorAll(".box");
    boxesList.forEach(box => {
        box.addEventListener('mouseover', turnBlack);
    });
}

function turnBlack(event) {
    event.target.style.backgroundColor = "black";
    event.target.style.borderColor= "black";
}

createGrid(16);