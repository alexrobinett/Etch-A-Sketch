

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

// Reset Button
const resetButton = document.querySelector("#reset-btn")

function resetGrid(){
    squares.forEach((square) => {
            square.classList.remove("colored")
        } )
}

resetButton.onclick = resetGrid

// Change grid Size 

const changeButton = document.querySelector("#size-btn")

function UpdateGrid(){
   //Get number from user
    let newGridSizestyle = Number(prompt("What should the new grid size be?"))
    newGridSize = newGridSizestyle * newGridSizestyle
   // remove current grid
    gridContainer.innerHTML = " "
   //create new grid
   for (i = 0; i < newGridSize; i++){
    const div = document.createElement("div")
    div.style.cssText = "border: 1px solid black;"
    div.classList = "grid"
    gridContainer.appendChild(div)
}
   // Update CSS Styling

   gridContainer.style.gridTemplateColumns= ` repeat(${newGridSizestyle}, 2fr)`
   gridContainer.style.gridTemplateRows= ` repeat(${newGridSizestyle}, 2fr)`

   const squares = document.querySelectorAll(".grid")

    squares.forEach((square) => {
    square.addEventListener("mouseover",() =>{
        square.classList.add("colored")
    } )
})

const resetButton = document.querySelector("#reset-btn")

function Resetgrid2(){
    squares.forEach((square) => {
            square.classList.remove("colored")
        } )
}

    resetButton.onclick = Resetgrid2
   
console.log(newGridSizestyle)
}

changeButton.onclick = UpdateGrid