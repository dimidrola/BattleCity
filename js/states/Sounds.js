
class Sounds {
    constructor(gm) {
        let game= gm;
        this.drive = game.add.audio('bg', .2, false);
        this.move = game.add.audio('move', .2, false);
    }

    _play(name){
        this[name].play();
    }
    _stop(name){
        this[name].stop();
    }

}

export default Sounds;
