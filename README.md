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
- Please download this folder to your local drive and just open index.html. That's it!
- You can also clone using link: https://github.com/dilipagheda/arcade-game.git
- If you just want to see the project in action, it is live at http://dilipagheda.com/arcade-game/

## About the coding approach
- This project has two classes that has game logic. A Player class and an Enemy class. As the name suggests, it encapsulates the logic of the player and enemy.
- Each of these classses communicate to App.js using callback functions. App.js has series of functions that manages the UI and drives Enemies and Player class by initilising it.
- There are Engine.js and resources.js which are part of the gaming engine and its used for the graphics side of the project.

## Further Documentation
A Deep Dive Into My Arcade Game Project
I'm excited to share a project that brings a classic arcade experience to life using modern JavaScript. This project isn't just a game; it's a showcase of the fundamental software design principles I value, built with clean, object-oriented code.

You can check out the full project on GitHub: https://github.com/dilipagheda/arcade-game.

Want to try the game for yourself? You can play it live here: [[Insert Live Demo Link Here](http://dilipagheda.com/arcade-game/)]

Building with Object-Oriented Principles
I built this project with a strong emphasis on Object-Oriented Programming (OOP), which was key to creating a scalable and maintainable application. Instead of a single, long script, I structured the game around distinct classes. This approach offers significant advantages over using regular functions alone.

Using classes allows me to encapsulate related data and behavior into a single, cohesive unit. For example, my Player class contains all the properties (like position and speed) and methods (like update and render) that define the player. With a function-based approach, this logic would likely be spread across multiple functions and variables, making it harder to manage and debug. Classes also enable inheritance, which means I can create new types of objects that share common functionality, reducing code duplication. This makes the codebase more organized, easier to read, and more robust for future expansion.

The Player class is a self-contained object that manages position, movement, and state. Encapsulating this logic keeps the code modular and easy to manage.

Similarly, the Enemy class handles the individual movement patterns and positions for each enemy. This separation of concerns makes it simple to add more enemies without the code becoming cluttered.

I also used inheritance to create different enemy types. This allows for code reuse and consistency, as new enemies can inherit core functionality and simply override specific behaviors like speed.

This approach demonstrates a deliberate choice to build a robust and organized application from the ground up.

The Engine: Game Loop and Collision Detection
The heart of the game is its game loop, which continuously updates the game state, renders visuals to the HTML5 canvas, and handles user input. I implemented a standard loop that ensures smooth and responsive gameplay.

A crucial part of this was the collision detection logic. I wrote code to accurately compare the player and enemy coordinates to determine when their hitboxes overlap. This required careful problem-solving and a solid understanding of the geometric calculations needed to make the game function correctly.
