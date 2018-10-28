# Desing Report

# Group members
Rhesus Positive:
Karl Arnar Ægisson, 
Katrín Guðmundsdóttir, 
Klevis Shakaj,
Sigurður Galdur Loftsson, 
Thomas Ari Bech, 
Voisava Gkouli

# Introduction
In this Late-term Assignment we will be making a Tic Tac Toe game in javascript language, using Test Driven Development. We’re going to share our project work in our Github repository, where each member of the group pulls and pushes the recent work done. 
The game will be simple. There will be a simple square game board divided into nine grid spaces, where the player clicks on one of it and it’ll assign first the ‘X’ and then the ‘O’ for the other player. The game is over when one player completes 3 grid spaces in a row and a banner will display the winner, then the players can restart the game if they want to play again. If no one wins then a Draw will display. 
Rather than simply showing the final project, I hope it will help us understand all the steps taken for implementing this game. 
 
For the implementation of the game we will use a variety of tools such as Heroku, trello, npm test, jest for testing and development.


# Design:

The design is based on the basic and simple logic of the Tic tac toe game. From thousands of combinations there are only eight winning combinations that will be three in horizontal, three vertical and two diagonal. This is the simple logic of the game. We will make a brief description on the basic elements to be implemented. 

# Program structure:

As in all games we have the standard sequence of steps carried out during the process repeatedly. In the Tic tac toe game based on the game logic and limits where we should meet the conditions of having a square board 3x3 and only two players (X and O), the overall program structure will be:

	Game initialize
	Player X > makes a move
	Player O > makes a move
	…
	If Player X/O wins or draw
	Game end
	Display the winner
	Start over



 # <<class diagram>>


……..
