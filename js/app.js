//Declare a varible for a character to act as a player
//Global variables
let isGameOver=true;

 let character = 'images/char-boy.png';

//declare an allEnemies array here
let allEnemies = [];

//row_number is the row where enemy will appear. possible values are 0,1,2 for each of the three rows.
let row_number=0;

//Create a player object using createPlayer method and pass in a character
let player = createPlayer(character);

//define variables for lives and score
let livesRemoved=0;
let currentScore =0;

//define a constant for total lives
const TOTAL_LIVES=5;

//Click listener for allowing user to choose a character and then get value of image path in a variable
$('li').on('click',function(e){
    character = $(e.target).attr('src');
    $('#selectPlayer').hide();
    $('#game').show();

    //reset game first
    resetGame();
    //start the game
    startGame();
})

//function to start a game
function startGame(){
    isGameOver = false;
    player.sprite = character;
    //Start with only one enemy and as user scores more, add more enemies
    allEnemies.push(createEnemy(player));
}

//function to crate an enemy
function createEnemy(){
    let e = new Enemy(row_number++);
    row_number = row_number > 2?0:row_number;
    e.player(player);
    return e;
}

//function to create a player
function createPlayer(character){
    // Create an instance of a Player class
    let player = new Player(character);
    // Assign a callback function to update the score back to App.js
    player.updateScore = updateScore;
    //Assign a callback function to reduce life
    player.reduceLife = reduceLife;
    
    return player;
}

//A function to update the score on UI
function updateScore(score){
    currentScore = score;
    //Update score on screen
    $('#score').text(`Score:${currentScore}`);
    //call increaseDifficulty to assess if game needs to be made more difficult
    increaseDifficulty();
}

// A function which will make the game harder by adding more enemies and increasing possibility for higher speed
function increaseDifficulty(){
    //Give player a chance to play game few  times before increasing difficulty
    if(currentScore%6 === 0){
        //add more enemy
        allEnemies.push(createEnemy());
    }
    if(currentScore%8 === 0){
        //increase speed
        allEnemies.forEach((current)=>{
            current.increaseSpeed();
        });
    }
}

//function to reduce life
function reduceLife(){
    livesRemoved++;
    $(`#lives li:nth-of-type(${livesRemoved})`).hide();
    if(livesRemoved >= TOTAL_LIVES){
        //game over
        $('.modal-body p').text(`Your score: ${currentScore}`);
        $('.modal').show();
        isGameOver = true;
    }
}

//function to reset a game
function resetGame(){
    livesRemoved=0;
    currentScore=0;
    row_number=0;
    allEnemies=[];
    player=null;
    player=createPlayer(character);
    $('#score').text(`Score:0`);
    $('#lives li').show();
}

//click handler for restarting a game
$('#restart').click(function(){
    $('#selectPlayer').show();
    $('#game').hide();
    $('.modal').hide();
})

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if(isGameOver)return;
    player.handleInput(allowedKeys[e.keyCode]);
});
