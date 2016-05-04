
import 'phaser-shim';
module.exports =  class Game extends Phaser.Game {
    constructor (width, height) {
        super(width, height);
    }
}

//module.exports = function(message){
//    if(NODE_ENV=='development'){
//        console.log('developmen')
//    }
//    console.log(`hello ${message}`);
//}