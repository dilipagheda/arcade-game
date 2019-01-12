// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const WATERLOCATION = 606-171-101/2 - 83*5;
const LIVES = 5;

class Player{
    constructor(character){
        // this.rows = [606-171-101/2 - 83*2,606-171-101/2 - 83*3,606-171-101/2 - 83*4];
        // this.cols = [0,101,202,303,404,505];
        this.sprite = character;
        console.log("pl:"+this.sprite);
        this.resetLocation();
        this.score=0;
        this.lives=LIVES;
    }
    update(dt){

    }
    render(){
        //console.log(this.sprite);
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }


    get startLocation(){
        return {x:202, y:606-171-101/2};
    }
    getLocation(){
        return {x:this.x, y:this.y};
    }
    resetLocation(){
        let startLocation = this.startLocation;
        this.x = startLocation.x;
        this.y = startLocation.y;
    }

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
            //console.log("score:"+this.score);
            this.increaseDifficulty(this.score);
        }
        
    }
}
