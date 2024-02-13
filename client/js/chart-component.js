/* global AFRAME */
AFRAME.registerComponent('chart', {
  multiple: true,
  schema: {
    target_charts: { type: 'string', default: '#' },
    origin_posX: { type: 'number', default: 0 },
    origin_posY: { type: 'number', default: 0 },
    origin_posZ: { type: 'number', default: 0 },
    dir: { type: 'boolean', default: true },
  },

  events: {
    click: function (evt) {
      const chart = document.getElementById(this.data.target_charts);
      const { x, y, z } = chart.getAttribute('rotation');
      const { xp, yp, zp } = chart.getAttribute('position');
      const originX = this.data.origin_posX;
      const originY = this.data.origin_posY;
      const originZ = this.data.origin_posZ;
      const value = evt.target.getAttribute('class');
      switch (value) {
        case 'rotate_left__button':
          chart.setAttribute('animation', {
            property: 'rotation',
            to: { x: x, y: -360, z: z },
            dur: 20000,
            easing: 'linear',
          });
          chart.play();
          break;
        case 'rotate_rigth_button':
          chart.setAttribute('animation', {
            property: 'rotation',
            to: { x: x, y: 360, z: z },
            dur: 30000,
            easing: 'linear',
          });
          chart.play();
          break;


        case 'left_button':
          let value = originY;
          if (this.data.dir) {
            value = value - 3;
          } else {
            value = value + 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: xp, y: yp, z: value },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;
        case 'rigth_button':
          let value2 = originY;
          if (this.data.dir) {
            value2 = value2 + 3;
          } else {
            value2 = value2 - 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: xp, y: yp, z: value2 },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;
        case 'top_button':
          let value3 = originZ;
          if (this.data.dir) {
            value3 = value3 - 3;
          } else {
            value3 = value3 + 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: xp, y: value3, z: zp },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;
        case 'bottom_button':
          let value4 = originZ;
          if (this.data.dir) {
            value4 = value4 + 3;
          } else {
            value4 = value4 - 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: xp, y: value4, z: zp },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;
        case 'forward_button':
          let value5 = originX;
          if (this.data.dir) {
            value5 = value5 - 3;
          } else {
            value5 = value5 + 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: value5, y: yp, z: zp },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;
        case 'after_button':
          let value6 = originX;
          if (this.data.dir) {
            value6 = value6 + 3;
          } else {
            value6 = value6 - 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: value6, y: yp, z: zp },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;


        case 'increase_scale__button':
          chart.setAttribute('animation__3', {
            property: 'scale',
            to: { x: 0.1, y: 0.1, z: 0.1 },
            dur: 10000,
            easing: 'linear',
          });
          chart.play();
          break
        case 'decrease_scale__button':
          chart.setAttribute('animation__3', {
            property: 'scale',
            to: { x: 0.01, y: 0.01, z: 0.01 },
            dur: 10000,
            easing: 'linear',
          });
          chart.play();
          break;
        default:
          chart.removeAttribute('animation');
          chart.removeAttribute('animation__2');
          chart.removeAttribute('animation__3');
          chart.pause();
          break;
      }
    },
  },
});
