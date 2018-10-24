//board.test.js
const getPlayers = require("./board");


describe('arrayContaining', () => {
  const expected = ['X', 'O'];
 
 it('Player can only be X and O', () => {
    expect(['X', 'O']).toEqual(expect.arrayContaining(getPlayers()));
  });	

  it('Player can not be other symbols', () => {
    expect(['X', 'L']).not.toEqual(expect.arrayContaining(getPlayers()));
  });

});



