//board.test.js
const board = require("./board");


describe('arrayContaining', () => {
  const expected = ['X', 'O'];
 
 it('Player can only be X and O', () => {
    expect(['X', 'O']).toEqual(expect.arrayContaining(board.getPlayers()));
  });	

  it('Player can not be other symbols', () => {
    expect(['X', 'L']).not.toEqual(expect.arrayContaining(board.getPlayers()));
  });

});

describe('arrayContaining', () => {
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
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

