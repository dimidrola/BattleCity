class Tank {

	constructor(game){
		//Do something
		//game.add.image(100, 100, 'dude');
		this._game = game;
		this.stop = true;
		this.s_drive = game.add.audio('bg', .2, false);
		this.s_move = game.add.audio('move', .2, false);
		this.speed =502;

		this.sprite = this._game.add.sprite(500, 500, 'dude');
		this.sprite.anchor.set(0.5);
		this.sprite.angle = 90;

		game.physics.enable(this.sprite);
		this._sound();
	}

	_sound(){
		if(!this.stop){
			this.s_drive.stop();
			this.s_move.play();
		} else{
			this.s_drive.play();
			this.s_move.stop();
		}
	}
	move(direction){
		switch (direction){
			case 'up':
				this.sprite.body.velocity.y -= this.speed;
				this.sprite.angle =0;

				break;
			case 'down':
				this.sprite.body.velocity.y += this.speed;
				this.sprite.angle =180;
				break;
			case 'left':
				this.sprite.body.velocity.x -= this.speed;
				this.sprite.angle =270;
				break;
			case 'right':
				this.sprite.body.velocity.x += this.speed;
				this.sprite.angle =90;
				break;

		}
		//this._sound()
	}

}
export default Tank;