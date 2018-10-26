//board.test.js
const board = require("./board");

afterEach(() => {
    board.initializeGame();
  });


describe('arrayContaining', () => {
  
 it('Board can only be 9 squares', () => {
    expect(board.getBoard()).toHaveLength(9);
  });	

});

it('Board starts with no winner', () => {
	expect(board.isWinner).toBe(false);
});

it('Board starts with X playing', () => {
	expect(board.getIsX()).toBe(true);
});

it('Starts with zero moves made', () => {
	expect(board.getTotalMoves()).toBe(0);
});

describe('Testing move function', () => {
  it('Expecting player to be X', () => {
    expect(board.getIsX()).toBe(true);
  });

  it('passing into move and expecting board[0] to be "X"', () => {
    board.move(1);
    let getBoard = board.getBoard();
    expect(getBoard[0]).toBe("X");
  });

  it('Expect next player to be O', () => {
    board.move(1);
    expect(board.getIsX()).toBe(false);
  });

  it('Expect board not to contain "O', () => {
    board.move(1);
    const expected = "O";
    let getBoard = board.getBoard();
    expect(getBoard).not.toContain(expected);
  });

  it('Expect player to be O for next round', () => {
    board.move(1);
    expect(board.getIsX()).toBe(false);
  });

  it('Expect movesMade to be 1 after putting in X', () => {
    board.move(1);
    expect(board.getTotalMoves()).toBe(1);
  })

  it('O chooses 2 in next move, so board[1] should be "O"', () => {
    board.move(1);
    board.move(2);
    let getBoard = board.getBoard();
    expect(getBoard[1]).toBe("O");
  });

  it('We want the remaining to be empty', () => {
    board.move(1);
    board.move(2);
    let getBoard = board.getBoard();
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
    board.move(1);
    board.move(2);
    expect(board.getTotalMoves()).toBe(2);
  });

  it('If x chooses 2, it should have no effect, 2 should be O', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    let getBoard = board.getBoard();
    expect(getBoard[1]).toBe("O");
  });

  it('X should continue, since he has to make a move', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    expect(board.isX).toBe(true);
  });

  it('movesMade should stay as 2', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    expect(board.getTotalMoves()).toBe(2);
  });

  it('X chooses 3, board[2] should be X', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    board.move(3);
    const expected = board.getBoard();
    expect(expected[2]).toBe("X");
  });

  it('O should be playing now', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    board.move(3);
    expect(board.getIsX()).toBe(false);
  });

  it('Expect board[3] to be ""', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    board.move(3);
    const expected = board.getBoard();
    expect(expected[3]).toBe("");
  });

  it('Expect movesMade to be 3', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    board.move(3);
    expect(board.getTotalMoves()).toBe(3);
  });

  it('O chooses 9, board[8], should be "O"', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    board.move(3);
    board.move(9);
    let getBoard = board.getBoard();
    expect(getBoard[8]).toBe("O");
  });

  it('Expected movesMade to be 4', () => {
    board.move(1);
    board.move(2);
    board.move(2);
    board.move(3);
    board.move(9);
    expect(board.getTotalMoves()).toBe(4);
  });

});

describe('checkWin', () => {
 it('Only winning rows return winner', () => {
  const expected = board.checkWin();
  expect(expected).toBe(false);
  }); 

it('checkWin should return true if any row is full', () => {
    
    board.move(1);
    board.move(4);
    board.move(2);
    board.move(8);
    board.move(3);
    
    expect(board.checkWin()).toBe(true);
});

it('checkWin should not return true if there is not a winner', () => {
    
    board.move(1);
    board.move(3);
    board.move(8);
    
    expect(board.checkWin()).toBe(false);
});

it('checkWin should return true if diagonal is full', () => {
    
    board.move(1);
    board.move(4);
    board.move(5);
    board.move(8);
    board.move(9);
    
    expect(board.checkWin()).toBe(true);
});

it('checkWin should return true if any column is full', () => {
    
    board.move(1);
    board.move(2);
    board.move(4);
    board.move(8);
    board.move(7);
    
    expect(board.checkWin()).toBe(true);
});

it('checkWin should return isWinner as true', () => {
    
    board.move(1);
    board.move(2);
    board.move(4);
    board.move(8);
    board.move(7);
    board.checkWin();
    
    expect(board.getWinner()).toBe(true);
});

});
it('itsADraw should return a draw if nine moves are made', () => {
    board.move(1);
    board.move(5);
    board.move(2);
    board.move(3);
    board.move(6);
    board.move(4);
    board.move(7);
    board.move(8);
    board.move(9);

  expect(board.itsADraw()).toBe(true);
});

describe('Checking printBoard', () => {
 it('Expect Board To Be Empty and not contain X', () => {
    const notExpected = ["X"];
    expect(board.printBoard()).not.toContain(notExpected);
  });

  it('Expect Board to be Empty and not contain O', () => {
    const notExpected = ["O"];
    expect(board.printBoard()).not.toContain(notExpected);
  });

  it('Expect Board to be empty and contain |', () => {
    const expected = ["|"];
    expect(board.printBoard()).toContain(expected);
  });

  it('Expect board to contain X after 1 move', () => {
    board.move(1);
    const expected = ["X"];
    expect(board.printBoard()).toContain(expected);
  });

  it('Expect board to not contain "O" after 1 move', () => {
    const expected = ["O"];
    expect(board.printBoard()).not.toContain(expected);
  });

  it('Expect board to contain O after 2nd move', () => {
    const expected = ["O"];
    board.move(1);
    board.move(2);
    expect(board.printBoard()).toContain(expected);
  });

  it('Expect board to also contain X after 2nd move', () => {
    board.move(1);
    board.move(2);
    const expected = ["X"];
    expect(board.printBoard()).toContain(expected);
  });

});