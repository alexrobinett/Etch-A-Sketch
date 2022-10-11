

// get grids working
let numberOfGrid = 64 * 64
const gridContainer = document.querySelector(".grid-container")
const div = document.createElement("div")


function createGrid(){

    for (i = 0; i < numberOfGrid; i++){
        const div = document.createElement("div")
        div.style.cssText = "border: 1px solid black;"
        div.classList = "grid"
        gridContainer.appendChild(div)
    }
    console.log(numberOfGrid)
}


createGrid()

const squares = document.querySelectorAll(".grid")

squares.forEach((square) => {
    square.addEventListener("mouseover",() =>{
        square.classList.add("colored")
    } )
})


const resetButton = document.querySelector("button")

function resetGrid(){
    squares.forEach((square) => {
            square.classList.remove("colored")
        } )
}


resetButton.onclick = resetGrid

