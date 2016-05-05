
import Tank from './../objects/user/user';
let tank,cursors,spaceKey,music,go,bullets,fireButton;
class Main extends Phaser.State {

	create() {
		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//Set the games background colour
		this.game.stage.backgroundColor = '#000';
		//Example of including an object
		tank = new Tank(this.game);

		//events
		cursors = this.game.input.keyboard.createCursorKeys();

		this.initSound();

	}
	update() {

		tank.sprite.body.velocity.x = 0;
		tank.sprite.body.velocity.y = 0;
		tank.sprite.body.angularVelocity = 0;


		if (cursors.left.isDown) {
			tank.sprite.body.angularVelocity = -200;
		}
		else if (cursors.right.isDown) {
			tank.sprite.body.angularVelocity = 200;
		}

		if (cursors.up.isDown) {
			music.play();
			go.stop();
			tank.sprite.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(tank.sprite.angle-90, 300));
		}
		if (cursors.up.isUp) {
			music.stop();
			go.play()
		}
	}

	initSound(){
		go = this.game.add.audio('drive-stay', .2, true);
		music = this.game.add.audio('drive-move', .2, true);
	}

}

export default Main;