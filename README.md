# Classic Arcade Game Clone Project
This is the 3rd Project for Udacity's Frontend developer nanodegree program. It is about building a classical arcade game using Object oriented JavaScript.
This project uses ES 6 style of classes.

## Rules of the game to play

1. User first chooses a player by clicking on it.
2. Use arrow keys (up, down, left and right) to move the player.
3. The goal of the game is to reach to the water (top side of the game board that has blue blocks) as many times as possible. Every time a player reaches the water , score is incremented by one and player's location is reset.
4. If a player collides with the bugs, player loses a life and comes back to the original location.
5. Player gets maximum of 5 lives.
6. When player loses all lives, game is over and final score is displayed.
7. Each game has a random collectible that user can optionally collect. If user collects it then user gets 5 points.
8. As user scores higher, game gets more difficult in terms of more bugs and they come at faster speed.
9. Enjoy the game!!

## How to setup the project locally
Please download this folder to your local drive and just open index.html. That's it!

## About the coding approach
- This project has two classes that has game logic. A Player class and an Enemy class. As the name suggests, it encapsulates the logic of the player and enemy.
- Each of these classses communicate to App.js using callback functions. App.js has series of functions that manages the UI and drives Enemies and Player class by initilising it.
- There are Engine.js and resources.js which are part of the gaming engine and its used for the graphics side of the project.
