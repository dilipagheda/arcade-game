// Enemies our player must avoid
class EnemyBase {
    constructor(row) {
        this.sprite = 'images/enemy-bug.png';

        this.rows = [606 - 171 - 101 / 2 - 83 * 2, 606 - 171 - 101 / 2 - 83 * 3, 606 - 171 - 101 / 2 - 83 * 4];
        this.cols = [0, 101, 202, 303, 404];
        /*  set inital speeds to 3 ranges. as player scores more, app.js will add more values here
            which will increase likelyhood of faster speeds.
        */
       this.speedRange = [100, 200, 300];

        //let's randomise enemy's starting location for some fun!
        //let y = Math.floor(Math.random() * (this.rows.length));
        let x = Math.floor(Math.random() * (this.cols.length));
        
        //set initial location
        this.x = this.cols[x];
        this.y = this.rows[row];
        //set random speed
        this.setRandomSpeed();
    }

    setRandomSpeed(){
        let s = Math.floor(Math.random() * (this.speedRange.length));
        //set the speed
        this.speed = this.speedRange[s];
    }

    /*  This function allows to set a reference to player object all an enemy from app.js
        using this reference, enemy object can know player's current position
    */
    player(player) {
        this.player = player;
        
    }
    /*  Update the enemy's position, required method for game
        Parameter: dt, a time delta between ticks
    */
    update(dt) {


        //check for collision before updating location
        this.checkCollision();
        /* multiply any movement by the dt parameter
        which will ensure the game runs at the same speed for
         all computers.
         */
        this.x += this.speed * dt;
        /*
            As enemy's current location can be in decimals, exact match to player's x location is not always possible.
            So, create a resonable range say plus or minus 3 from enemy's current approximate x location.
            This will ensure an approximate match within reasonable proximity.
        */

        //check for collision after updating location
        this.checkCollision();

        //reset x to 0 so that enemy doesn't go outside the canvas area
        if (this.x > 404) this.x = 0;

    };

    /*
        Match enemy's x and y co-ordinates with Player's x and y
        If the match is found then reset player's position.
    */
    checkCollision(){
        /* Fetch the player's current location and store it in the local variable */
        let playerLocation = this.player.getLocation();
        let lowerX = Math.floor(this.x) - 3;
        let higherX = Math.floor(this.x) + 3;
        if (playerLocation.x >= lowerX && playerLocation.x <= higherX) {
            if (playerLocation.y === this.y) {
                this.player.resetLocation();
                this.player.reduceLife();

            }

        }
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    //increase possibility of speed for an enemy
    increaseSpeed(){
        this.speedRange.push(this.speedRange[this.speedRange.length-1]+100);
        this.setRandomSpeed();
    }
}

class Enemy extends EnemyBase {
    constructor(row) {
        super(row);
    }
}