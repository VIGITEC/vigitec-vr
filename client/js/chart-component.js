/* global AFRAME */
AFRAME.registerComponent('chart', {
  multiple: true,
  schema: {
    target_charts: { type: 'string', default: '#' },
    dir: { type: 'boolean', default: true },
  },

  events: {
    click: function (evt) {
      const chart = document.getElementById(this.data.target_charts);
      const { x, y, z } = chart.getAttribute('rotation');
      const { x: xp, y: yp, z: zp } = chart.getAttribute('position');

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
          let value = zp;
          if (this.data.dir) {
            value = value - 2;
          } else {
            value = value + 2;
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
          let value2 = zp;
          if (this.data.dir) {
            value2 = value2 + 2;
          } else {
            value2 = value2 - 2;
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
          let value3 = yp;
          if (this.data.dir) {
            value3 = value3 - 2;
          } else {
            value3 = value3 + 2;
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
          let value4 = yp;
          if (this.data.dir) {
            value4 = value4 + 2;
          } else {
            value4 = value4 - 2;
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
          let value5 = xp;
          if (this.data.dir) {
            value5 = value5 - 2;
          } else {
            value5 = value5 + 2;
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
          let value6 = xp;
          if (this.data.dir) {
            value6 = value6 + 2;
          } else {
            value6 = value6 - 2;
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
            to: { x: 1, y: 1, z: 1 },
            dur: 10000,
            easing: 'linear',
          });
          chart.play();
          break
        case 'decrease_scale__button':
          chart.setAttribute('animation__3', {
            property: 'scale',
            to: { x: 0.1, y: 0.1, z: 0.1 },
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
