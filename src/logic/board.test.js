//board.test.js
const tictactoe = require("./board");

let state = new tictactoe.tictactoe();

afterEach(() => {
  state = new tictactoe.tictactoe();
});



describe('arrayContaining', () => {
  
 it('Board can only be 9 squares', () => {
    expect(tictactoe.getBoard(state)).toHaveLength(9);
  }); 

});

it('Board starts with no winner', () => {
  expect(tictactoe.getWinner(state)).toBe(true);
});

it('Board starts with X playing', () => {
  expect(tictactoe.getIsX(state)).toBe(true);
});

it('Starts with zero moves made', () => {
  expect(tictactoe.getTotalMoves(state)).toBe(0);
});

describe('Testing move function', () => {
  it('Expecting player to be X', () => {
    expect(tictactoe.getIsX(state)).toBe(true);
  });

  it('passing into move and expecting board[0] to be "X"', () => {
    tictactoe.move(state, 1);
    const getBoard = tictactoe.getBoard(state);
    expect(getBoard[0]).toBe("X");
  });

  it('Expect next player to be O', () => {
    tictactoe.move(state, 1);
    expect(tictactoe.getIsX(state)).toBe(false);
  });

  it('Expect board not to contain "O', () => {
    tictactoe.move(state, 1);
    const expected = "O";
    const getBoard = tictactoe.getBoard(state);
    expect(getBoard).not.toContain(expected);
  });

  it('Expect player to be O for next round', () => {
    tictactoe.move(state, 1);
    expect(tictactoe.getIsX(state)).toBe(false);
  });

  it('Expect movesMade to be 1 after putting in X', () => {
    tictactoe.move(state, 1);
    expect(tictactoe.getTotalMoves(state)).toBe(1);
  })

  it('O chooses 2 in next move, so board[1] should be "O"', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    const getBoard = tictactoe.getBoard(state);
    expect(getBoard[1]).toBe("O");
  });

  it('We want the remaining to be empty', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    const getBoard = tictactoe.getBoard(state);
    expect(getBoard[0]).toBe("X");
    expect(getBoard[1]).toBe("O");
    expect(getBoard[2]).toBe("");
    expect(getBoard[3]).toBe("");
    expect(getBoard[4]).toBe("");
    expect(getBoard[5]).toBe("");
    expect(getBoard[6]).toBe("");
    expect(getBoard[7]).toBe("");
    expect(getBoard[8]).toBe("");
  });

  it('Expect movesMade to be 2 after adding O', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    expect(tictactoe.getTotalMoves(state)).toBe(2);
  });

  it('If x chooses 2, it should have no effect, 2 should be O', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    const getBoard = tictactoe.getBoard(state);
    expect(getBoard[1]).toBe("O");
  });

  it('X should continue, since he has to make a move', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    expect(tictactoe.getIsX(state)).toBe(true);
  });

  it('movesMade should stay as 2', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    expect(tictactoe.getTotalMoves(state)).toBe(2);
  });

  it('X chooses 3, board[2] should be X', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    tictactoe.move(state, 3);
    const expected = tictactoe.getBoard(state);
    expect(expected[2]).toBe("X");
  });

  it('O should be playing now', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    tictactoe.move(state, 3);
    expect(tictactoe.getIsX(state)).toBe(false);
  });

  it('Expect board[3] to be ""', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    tictactoe.move(state, 3);
    const expected = tictactoe.getBoard(state);
    expect(expected[3]).toBe("");
  });

  it('Expect movesMade to be 3', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    tictactoe.move(state, 3);
    expect(tictactoe.getTotalMoves(state)).toBe(3);
  });

  it('O chooses 9, board[8], should be "O"', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    tictactoe.move(state, 3);
    tictactoe.move(state, 9);
    const getBoard = tictactoe.getBoard(state);
    expect(getBoard[8]).toBe("O");
  });

  it('Expected movesMade to be 4', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 2);
    tictactoe.move(state, 3);
    tictactoe.move(state, 9);
    expect(tictactoe.getTotalMoves(state)).toBe(4);
  });

  it('Expected move to be return true on valid move', () => {
    expect(tictactoe.move(state, 1)).toBe(true);
    expect(tictactoe.move(state, 2)).toBe(true);
    expect(tictactoe.move(state, 3)).toBe(true);
    expect(tictactoe.move(state, 4)).toBe(true);
    expect(tictactoe.move(state, 5)).toBe(true);
  });

  it('Expected move to be return false on invalid move', () => {
    expect(tictactoe.move(state, 1)).toBe(true);
    expect(tictactoe.move(state, 2)).toBe(true);
    expect(tictactoe.move(state, 2)).toBe(false);
    expect(tictactoe.move(state, 4)).toBe(true);
    expect(tictactoe.move(state, 1)).toBe(false);
  });

});

describe('checkWin', () => {
  it('Only winning rows return winner', () => {
    tictactoe.checkWin(state);
    expect(tictactoe.getWinner(state)).toBe(false);
  }); 

  it('checkWin should set isWinner to true if any row is full', () => {
    
    tictactoe.move(state, 1);
    tictactoe.move(state, 4);
    tictactoe.move(state, 2);
    tictactoe.move(state, 8);
    tictactoe.move(state, 3);
    tictactoe.checkWin(state)
    expect(tictactoe.getWinner(state)).toBe(true);
  });

  it('checkWin should not set isWinner to true if there is not a winner', () => {
    
    tictactoe.move(state, 1);
    tictactoe.move(state, 3);
    tictactoe.move(state, 8);
    tictactoe.checkWin(state)
    expect(tictactoe.getWinner(state)).toBe(false);
  });

  it('checkWin should set isWinner to true if diagonal is full', () => {
    
    tictactoe.move(state, 1);
    tictactoe.move(state, 4);
    tictactoe.move(state, 5);
    tictactoe.move(state, 8);
    tictactoe.move(state, 9);
    tictactoe.checkWin(state)
    expect(tictactoe.getWinner(state)).toBe(true);
  });

  it('checkWin should set isWinner to true if any column is full', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 4);
    tictactoe.move(state, 8);
    tictactoe.move(state, 7);
    tictactoe.checkWin(state)
    expect(tictactoe.getWinner(state)).toBe(true);
  });
});

it('itsADraw should return a draw if nine moves are made', () => {
  tictactoe.move(state, 1);
  tictactoe.move(state, 5);
  tictactoe.move(state, 2);
  tictactoe.move(state, 3);
  tictactoe.move(state, 6);
  tictactoe.move(state, 4);
  tictactoe.move(state, 7);
  tictactoe.move(state, 8);
  tictactoe.move(state, 9);

  expect(tictactoe.itsADraw(state)).toBe(true);
});

describe('Checking printBoard', () => {
 it('Expect Board To Be Empty and not contain X', () => {
    const notExpected = ["X"];
    expect(tictactoe.printBoard(state)).not.toContain(notExpected);
  });

  it('Expect Board to be Empty and not contain O', () => {
    const notExpected = ["O"];
    expect(tictactoe.printBoard(state)).not.toContain(notExpected);
  });

  it('Expect Board to be empty and contain |', () => {
    const expected = ["|"];
    expect(tictactoe.printBoard(state)).toContain(expected);
  });

  it('Expect board to contain X after 1 move', () => {
    tictactoe.move(state, 1);
    const expected = ["X"];
    expect(tictactoe.printBoard(state)).toContain(expected);
  });

  it('Expect board to not contain "O" after 1 move', () => {
    const expected = ["O"];
    expect(tictactoe.printBoard(state)).not.toContain(expected);
  });

  it('Expect board to contain O after 2nd move', () => {
    const expected = ["O"];
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    expect(tictactoe.printBoard(state)).toContain(expected);
  });

  it('Expect board to also contain X after 2nd move', () => {
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    const expected = ["X"];
    expect(tictactoe.printBoard(state)).toContain(expected);
  });

  it('Expect board to also contain X and 0', () => {
    tictactoe.move(state, 7);
    tictactoe.move(state, 9);
    tictactoe.move(state, 8);
    tictactoe.move(state, 1);
    tictactoe.move(state, 2);
    tictactoe.move(state, 3);
    tictactoe.move(state, 5);
    tictactoe.move(state, 6);
    expect(tictactoe.printBoard(state)).toContain(["X"]);
    expect(tictactoe.printBoard(state)).toContain(["O"]);
  });

});

describe('Testing setBoard function', () => {
  it('Expect setBoard to return false if an array is not passed in', () => {
    expect(tictactoe.setBoard(state, 1)).toBe(false);
  });

  it('Expect setBoard to return false if an array is not contain 9 items', () => {
    expect(tictactoe.setBoard(state, ["","",""])).toBe(false);
    expect(tictactoe.setBoard(state, ["","","","","","","","","",""])).toBe(false);
  });

  it('Expect setBoard to return false if an array contains invalid characters', () => {
    expect(tictactoe.setBoard(state, ["","","2","","!","","&&","s","ss"])).toBe(false);
  });

  it('Expect setBoard to return true if the array is valid and update board', () => {
    const newBoard = ["", "X", "", "X", "", "", "O", "O", ""];
    expect(tictactoe.setBoard(state, newBoard)).toBe(true);
    expect(tictactoe.getBoard(state)).toBe(newBoard);
  });
});

describe('Testing validateMove function', () => {
  it('Expect validateMove to return true if a move is valid', () => {
    tictactoe.setBoard(state, ["", "X", "", "X", "", "", "O", "O", ""]);
    expect(tictactoe.validateMove(state, 1)).toBe(true);
    expect(tictactoe.validateMove(state, 3)).toBe(true);
    expect(tictactoe.validateMove(state, 5)).toBe(true);
    expect(tictactoe.validateMove(state, 6)).toBe(true);
    expect(tictactoe.validateMove(state, 9)).toBe(true);
  });

  it('Expect validateMove to return false if a move the spot is occupied', () => {
    tictactoe.setBoard(state, ["", "X", "", "X", "", "", "O", "O", ""]);
    expect(tictactoe.validateMove(state, 2)).toBe(false);
    expect(tictactoe.validateMove(state, 4)).toBe(false);
    expect(tictactoe.validateMove(state, 7)).toBe(false);
    expect(tictactoe.validateMove(state, 8)).toBe(false);
  });

  it('Expect validateMove to return false if the game has been won', () => {
    tictactoe.setBoard(state, ["X", "X", "X", "", "", "", "O", "O", ""]);
    tictactoe.checkWin(state);
    expect(tictactoe.validateMove(state, 4)).toBe(false);
    expect(tictactoe.validateMove(state, 5)).toBe(false);
    expect(tictactoe.validateMove(state, 6)).toBe(false);
  });
});