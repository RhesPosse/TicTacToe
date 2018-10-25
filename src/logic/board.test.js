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