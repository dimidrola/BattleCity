class Tank {

	constructor(game){
		//Do something
		//game.add.image(100, 100, 'dude');
		this.sprite = game.add.sprite(500, 500, 'dude');
		this.sprite.anchor.set(0.5);
		this.sprite.angle = 90;
		game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.body.collideWorldBounds = true;
		this.sprite.body.bounce.set(0.5);
		this.sprite.body.allowRotation = true;
		this.sprite.body.immovable = true;
		this.sprite.body.angularVelocity = 200;

	}

}
export default Tank;