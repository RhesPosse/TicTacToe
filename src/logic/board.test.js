//board.test.js
const board = require("./board");


describe('arrayContaining', () => {
  
 it('Player can only be X and O', () => {
    expect(['X', 'O']).toEqual(expect.arrayContaining(board.getPlayers()));
  });	

  it('Player can not be other symbols', () => {
    expect(['X', 'L']).not.toEqual(expect.arrayContaining(board.getPlayers()));
  });

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
	expect(board.isX).toBe(true);
});

it('Starts with zero moves made', () => {
	expect(board.getTotalMoves()).toBe(0);
});

it('passing into move', () => {
  expect(board.move(1)).toBe(false);
});

it('Expect board[0] to be "X"', () => {
  const expected = board.getBoard();
  expect(expected[0]).toBe("X");
});

it('Expect board to contain "X"', () => {
  expect(board.getBoard()).toContain("X");
})

it('Expect board not to contain "O', () => {
  const expected = ["O"];
  expect(board.getBoard()).toEqual(
    expect.not.arrayContaining(expected));
});

it('Expect movesMade to be 1 after putting in X', () => {
  expect(board.getTotalMoves()).toBe(1);
})

it('passing 2 into move', () => {
  expect(board.move(2)).toBe(false);
});

it('Expect board[1] to be "O"', () => {
  const expected = board.getBoard();
  expect(expected[1]).toBe("O");
});

it('Expect board to contain "O"', () => {
  expect(board.getBoard()).toContain("O");
});

it('Expect movesMade to be 2 after adding O', () => {
  expect(board.getTotalMoves()).toBe(2);
});

it('trying to pass 2 into move again', () => {
  expect(board.move(2)).toBe(true);
});

it('next player chooses 3', () => {
  expect(board.move(3)).toBe(false);
});

it('Expect board[2] to be "X"', () => {
  const expected = board.getBoard();
  expect(expected[2]).toBe("X");
});

it('Expect board[3] to be ""', () => {
  const expected = board.getBoard();
  expect(expected[3]).toBe("");
});

it('Expect movesMade to be 3', () => {
  expect(board.getTotalMoves()).toBe(3);
});

it('Move cannot be 0', () => {
  expect(board.move(0)).toBe(true);
});

it('Move cannot be 10', () => {
  expect(board.move(10)).toBe(true);
});

it('Move can be 9', () => {
  expect(board.move(9)).toBe(false);
});

it('Expect board[8] to be "O"', () => {
  const expected = board.getBoard();
  expect(expected[8]).toBe("O");
});

it('Expected player to be "X"', () => {
  expect(board.isX).toBe(true);
});

it('Expected movesMade to be 4', () => {
  expect(board.getTotalMoves()).toBe(4);
});



describe('checkWin', () => {
  afterEach(() => {
    board.initializeGame();
  });
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


});