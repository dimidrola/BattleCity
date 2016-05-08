
import Tank from './../objects/user/user';
import Sounds from './Sounds';
let tank,cursors,spaceKey,sound,bullets,fireButton, music, layer;
class Main extends Phaser.State {

	create() {
		this.map = this.game.add.tilemap('level1');
		//this.map.addTilesetImage('map.png','map');
		this.map.addTilesetImage('map');
		layer = this.map.createLayer(0);

		//Set the games background colour
		this.game.stage.backgroundColor = '#000';
		this.sound = new Sounds(this.game);
		//Example of including an object
		tank = new Tank(this.game);

		this.map.setCollisionByExclusion([ 2, 4]);
		layer.resizeWorld();
		this.game.physics.startSystem(Phaser.Physics.ARCADE);


		//events
		cursors = this.game.input.keyboard.createCursorKeys();
	}

	update() {

		this.game.physics.arcade.collide(tank.sprite, layer);
		tank.stop = true;
		tank.sprite.body.velocity.x = 0;
		tank.sprite.body.velocity.y = 0;
		if (cursors.left.isDown)
		{
			tank.stop = false;
			tank.move('left');
		}
		else if (cursors.right.isDown)
		{
			tank.stop = false;
			tank.move('right');
		}

		if (cursors.up.isDown)
		{
			tank.stop = false;
			tank.move('up');
		}
		else if (cursors.down.isDown)
		{
			tank.stop = false;
			tank.move('down');
		}


		tank._sound()

	}

}

export default Main;