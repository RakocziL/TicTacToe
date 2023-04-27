
/* GameBoard Generator */
const gameBoard = (()=>{
    let myArray = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
    const changeArray = (a,b,type)=>myArray[a][b]=type ? "x":"o" 
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
        clearArray
    };
})();

