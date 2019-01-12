 //Declare a varible for a character to act as a player
//Global variables
 let character = 'images/char-boy.png';

//declare an allEnemies array here
let allEnemies = [];
//row_number is the row where enemy will appear. possible values are 0,1,2 for each of the three rows.
let row_number=0;
let player = createPlayer(character);
let livesRemoved=0;
let currentScore =0;
const TOTAL_LIVES=5;
//Click listener for allowing user to choose a character and then get value of image path in a variable
$('li').on('click',function(e){
    character = $(e.target).attr('src');
    console.log(character);
    $('#selectPlayer').hide();
    $('#game').show();

    //reset game first
    resetGame();
    //start the game
    startGame();
})

function startGame(){

    player.sprite = character;
    //Start with only one enemy and as user scores more, add more enemies
    allEnemies.push(createEnemy(player));
}

function createEnemy(){
    let e = new Enemy(row_number++);
    row_number = row_number > 2?0:row_number;
    e.player(player);
    return e;
}

function createPlayer(character){
    // Create an instance of a Player class
    let player = new Player(character);
    // Assign a callback function which player will call each time player scores
    player.increaseDifficulty = increaseDifficulty;
    //Assign a callback function to reduce life
    player.reduceLife = reduceLife;
    return player;
}

// A function which will make the game harder by adding more enemies and increasing possibility for higher speed
function increaseDifficulty(score){
    console.log("callback:"+currentScore);
    currentScore = score;
    //Update score on screen
    $('#score').text(`Score:${currentScore}`);
    //Give player a chance to play game a couple of times before increasing difficulty
    if(currentScore%2 === 0){
        //add more enemy
        allEnemies.push(createEnemy());
    }
    if(currentScore%3 === 0){
        //increase speed
        allEnemies.forEach((current)=>{
            current.increaseSpeed();
        });
    }
}

function reduceLife(){
    livesRemoved++;
    console.log("live removed:"+livesRemoved);
    $(`#lives li:nth-of-type(${livesRemoved})`).hide();
    if(livesRemoved >= TOTAL_LIVES){
        //game over
        console.log("game over");
        $('.modal-body p').text(`Your score: ${currentScore}`);
        $('.modal').show();
    }
}

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

    player.handleInput(allowedKeys[e.keyCode]);
});
