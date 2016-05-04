'use strict'
require('phaser-shim');

var game = new Phaser.Game(800, 600);

let welcome = require('./welcome');
welcome('dima')



exports.welcome = welcome;
