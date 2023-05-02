
/* GameBoard Generator */
const gameBoard = (()=>{
    let myArray = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
    const createGrid = ()=>{
        const gridContainer = document.getElementById("gameBoard");
        for(let i = 0; i <myArray.length;i++){
            for(let x =0; x <myArray[i].length; x++){

                /* Creating the elements */
                const newGrid = document.createElement("div");
                const gridIcon = document.createElement("img");

                /* Adding attributes */
                newGrid.className="fieldGrid";
                newGrid.setAttribute("id", "field"+i+x);
                gridIcon.src ="";

                /* Appending Elements */
                gridContainer.appendChild(newGrid);
                newGrid.appendChild(gridIcon);

                /* Adding eventListeners */
                newGrid.addEventListener("click", ()=>{
                    console.log(gridIcon.src)
                    if(gridIcon.src == "file:///Users/leventerakoczi/repos/TicTacToe/index.html"){
                        gridIcon.src="icons/"+gameplay.playerTurn() +".svg";
                        gridIcon.style.display="block";
                        changeArray(i,x, gridIcon.src.slice(-5,-4));
                    }
                    else{
                        console.log("This grid already has an emblem");
                    }
                    gameplay.checkGameState();
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
        for(let i = 0; i < 3; i++){
            for(let x = 0; x < 3; x++){
                const gridItem =document.getElementById("field"+i+x);
                const gridIMG = gridItem.querySelector("img");
                gridIMG.src = "";
                gridIMG.style.animation="";
                gridIMG.style.display="none";
            }
        }
        const endScreen = document.getElementById("endGameScreen");
        endScreen.classList.add("disabled");

    }
    return {
        myArray,
        changeArray,
        clearArray,
        createGrid,
    };
})();

/* Gameplay module */
const gameplay = (()=>{
    let playerCounter = 0;

    const playerTurn = ()=>{
        playerCounter+= 1;
        return (playerCounter-1) % 2== 0 ? "X":"O";
    }
    const checkGameState = ()=>{
        for(let i = 0; i < gameBoard.myArray.length; i++){
            if(gameBoard.myArray[i][0]== gameBoard.myArray[i][1]&&gameBoard.myArray[i][1]== gameBoard.myArray[i][2]&&gameBoard.myArray[i][0]!=""){
                gameEnd(gameBoard.myArray[i][0],"field"+i+"0","field"+i+"1","field"+i+"2");
            }
        }
        for(let i = 0; i < 3; i++){
            if(gameBoard.myArray[0][i]== gameBoard.myArray[1][i]&&gameBoard.myArray[1][i]== gameBoard.myArray[2][i]&&gameBoard.myArray[0][i]!=""){
                gameEnd(gameBoard.myArray[0][i],"field"+"0"+i,"field"+"1"+i,"field"+"2"+i);
            } 
        }
        if(gameBoard.myArray[0][0]== gameBoard.myArray[1][1]&&gameBoard.myArray[1][1]== gameBoard.myArray[2][2]&&gameBoard.myArray[0][0]!=""){
            gameEnd(gameBoard.myArray[0][0],"field"+"00","field"+"11","field"+"22");
        } 
        if(gameBoard.myArray[0][2]== gameBoard.myArray[1][1]&&gameBoard.myArray[1][1]== gameBoard.myArray[2][0]&&gameBoard.myArray[0][2]!=""){
            gameEnd(gameBoard.myArray[0][2],"field"+"02","field"+"11","field"+"20");
        } 
    }
    const gameEnd = (a,idOne,idTwo,idThree)=>{
        const endScreen = document.getElementById("endGameScreen");
        const gridOne = document.getElementById(idOne);
        const gridTwo = document.getElementById(idTwo);
        const gridThree = document.getElementById(idThree);

        const picOne  = gridOne.querySelector("img");
        const picTwo = gridTwo.querySelector("img");
        const picThree = gridThree.querySelector("img");

        const elements = document.querySelectorAll(".fieldGrid");

        picOne.style.animation="scale-animation 1s ease-in-out infinite";
        picTwo.style.animation="scale-animation 1s ease-in-out infinite";
        picThree.style.animation="scale-animation 1s ease-in-out infinite";

        endScreen.classList.remove("disabled");
    }
    return{
        playerCounter,
        playerTurn,
        checkGameState,
        gameEnd,
    }
})();

gameBoard.createGrid();
const newGameButton = document.getElementById("new");
newGameButton.addEventListener("click", gameBoard.clearArray);

