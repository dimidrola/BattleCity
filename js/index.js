'use strict'
import  './css/main.css';
import {
	WINDOW_WIDTH,
	WINDOW_HEIGHT,
	LOADING_TEXT
} from './constants/index'

let Game = require('./Phaser/Game')
let State = require('./Phaser/State')

const game = new Game(WINDOW_WIDTH, WINDOW_HEIGHT);
const BootGameState = new State();

game.state.add('Boot', BootGameState, false);

BootGameState.create = function() {
	let LoadingText = game.add.text(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2, LOADING_TEXT, {
		font: '32px "Arial"',
		fill: '#FFFFFF',
		stroke: '#000000',
		strokeThickness: 3,
		align: 'center'
	});
	LoadingText.anchor.setTo(0.5, 0.5);
	game.state.start('Preloader', false, false);
};

game.state.start('Boot');