window.debug = true;
// include all dependencies via require - don't use script tags in scenes
require('aframe');
require('aframe-motion-capture-components');
// require your package entry point:
require('../index.js');
require('socket.io')
require('networked-aframe')
require('aframe-babia-components')
require('aframe-event-set-component')
require('aframe-extras')
require('aframe-gui')
require('aframe-randomizer-components')
require('./scenes/js/chart-component.js')
require('./scenes/js/cursor-listener-component.js')
require('./scenes/js/movement-component.js')
require('./scenes/js/spawn-in-circle.js')