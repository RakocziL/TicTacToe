
/* GameBoard Generator */
const gameBoard = (()=>{
    let myArray = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
    const createGrid = ()=>{
        const gridContainer = document.getElementById("gameBoard");
        let idNum = 1;
        for(let i = 0; i <myArray.length;i++){
            for(let x =0; x <myArray[i].length; x++){

                /* Creating the elements */
                const newGrid = document.createElement("div");
                const gridIcon = document.createElement("img");

                /* Adding attributes */
                newGrid.className="fieldGrid";
                newGrid.setAttribute("id", "field_"+idNum);
                idNum++;

                /* Appending Elements */
                gridContainer.appendChild(newGrid);
                newGrid.appendChild(gridIcon);

                /* Adding eventListeners */
                newGrid.addEventListener("click", ()=>{
                    gridIcon.src  ="icons/"+gameplay.playerTurn() +".svg";
                    changeArray(i,x, gridIcon.src.slice(-5,-4));
                })
            }
        }
    }
    const changeArray = (a,b,type)=>myArray[a][b]=type;
    const clearArray = ()=>{
        for(let i = 0; i<myArray.length;i++){
            for(let y = 0; y < myArray[i].length; y++){
                myArray[i][y]="";
            }
        }
    }
    return {
        myArray,
        changeArray,
        clearArray,
        createGrid,
    };
})();

const gameplay = (()=>{
    let playerCounter = 0;

    const playerTurn = ()=>{
        playerCounter+= 1;
        return (playerCounter-1) % 2== 0 ? "X":"O";
    }

    return{
        playerCounter,
        playerTurn,
    }
})();

/* Player Factory */
const playerFactory = (type) => {
    const playerStep = (a,b) =>{
        gameBoard.changeArray(a,b,type);
    }
    return{type, playerStep};
};

gameBoard.createGrid();
const playerX = playerFactory(true);
const playerY = playerFactory(false);


