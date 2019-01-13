// Player class that has logic to drive a player

//define global constants
const WATERLOCATION = 606-171-101/2 - 83*5;

class Player{
    constructor(character){
        this.sprite = character;
        console.log("pl:"+this.sprite);
        this.resetLocation();
        this.score=0;
    }
    //A method to render graphics
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        this.showRandomCollectible();
    }

    //A method to show a random collectible at random location
    showRandomCollectible(){
        if(this.collected)return;
        let rows, cols, x, y,r;
        let collectibleOptions=[];
        
        if(!this.collectiblePosition){
            rows = [606 - 171 - 101 / 2 - 83 * 2, 606 - 171 - 101 / 2 - 83 * 3, 606 - 171 - 101 / 2 - 83 * 4];
            cols = [0,101,202,303,404];
            x = Math.floor(Math.random() * (cols.length));
            y = Math.floor(Math.random() * (rows.length));
            this.collectiblePosition = {x:cols[x], y:rows[y]};
        
            collectibleOptions = [
                'images/Key.png',
                'images/Rock.png',
                'images/Heart.png',
                'images/Selector.png',
                'images/Star.png',
                'images/Gem Blue.png',
                'images/Gem Green.png',
                'images/Gem Orange.png'
            ];
            r = Math.floor(Math.random() * (collectibleOptions.length));
            this.collectibleImage = collectibleOptions[r];
        }
        ctx.drawImage(Resources.get(this.collectibleImage), this.collectiblePosition.x, this.collectiblePosition.y);
    
    }
    //A method to collect the collectible
    collectIt(){
        this.collected = true;
        this.collectiblePosition=null;
        this.score+=5;
        this.updateScore(this.score);
    }
    //Getter that returns the start location of a player
    get startLocation(){
        return {x:202, y:606-171-101/2};
    }
    //Get current location of a player
    getLocation(){
        return {x:this.x, y:this.y};
    }
    //Reset location of a player
    resetLocation(){
        let startLocation = this.startLocation;
        this.x = startLocation.x;
        this.y = startLocation.y;
    }
    //Handle arrow keys and move player around
    handleInput(key){
        switch(key){
            case 'up':
                if(this.y-83 >= -30.5) this.y-=83;
                break;
            case 'down':
                if(this.y+83 <= (606-171-101/2)) this.y+=83;
                break;
            case 'right':
                if(this.x < 404) this.x+=101;
                break;
            case 'left':
                if(this.x > 0) this.x-=101;
                break;
        }
        if(this.y === WATERLOCATION){
            console.log("water reached!");
            this.resetLocation();
            this.score++;
            this.collected=false;
            this.updateScore(this.score);
        }
        if(this.collectiblePosition && this.x === this.collectiblePosition.x && this.y === this.collectiblePosition.y){
            console.log("collect it!");
            this.collectIt();
        }
        
    }
}
