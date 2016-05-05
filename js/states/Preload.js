class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9353/big-apple.png');
		this.game.load.spritesheet('dude', require("file?name=[path][name].[ext]!./../objects/user/user.png"),15,15);
		this.game.load.audio('bg', [require('file?name=[path][name].[ext]!./../objects/user/background.mp3')]);
		this.game.load.audio('move', [require('file?name=[path][name].[ext]!./../objects/user/brick.mp3')]);

		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
	}

	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}
export default Preload;