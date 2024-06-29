const gameBoard = ( function() {
  const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]

  //DOM cache
  
  //Bind Events

  
  
  //Console Game Based
  function consoleBased() {
    
  }

  function askPlayerName() {
    let askPlayer = prompt('')
  }

  function askPlayGame() {
    console.log("WELCOME TO TIC-TAC-TOE CONSOLE BASED!!!");
    let continueGame  = prompt("Do you want to play the game? ( yes / no ): ");

    if ( continueGame.toLowerCase() == 'yes' ) {

      askPlayerName();
    } else if ( continueGame.toLowerCase() == 'no' ) {
      //!Exit the game find sollution for this
    }
  }

  function askInput() {}

  function consoleTTT() {}

  function drawBoardConsole() {}

  function updateBoardConsole() {}

  function tttSolution() {}
})();
