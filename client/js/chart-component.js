/* global AFRAME */
AFRAME.registerComponent('chart', {
  multiple: true,
  schema: {
    target_charts: { type: 'string', default: '#' },
    origin_pos: { type: 'number', default: 0 },
    dir: { type: 'boolean', default: true },
  },

  init: function () {
    // Do something when component first attached.
  },

  events: {
    click: function (evt) {
      const chart = document.getElementById(this.data.target_charts);
      const { x, y, z } = chart.getAttribute('rotation');
      const { xp, yp, zp } = chart.getAttribute('position');
      const origin = this.data.origin_pos;
      switch (evt.target.id) {
        case 'left_button':
          chart.setAttribute('animation', {
            property: 'rotation',
            to: { x: x, y: -360, z: z },
            dur: 20000,
            easing: 'linear',
          });
          chart.play();
          break;
        case 'rigth_button':
          chart.setAttribute('animation', {
            property: 'rotation',
            to: { x: x, y: 360, z: z },
            dur: 30000,
            easing: 'linear',
          });
          chart.play();
          break;
        case 'pause_button':
          chart.removeAttribute('animation');
          chart.removeAttribute('animation__2');
          chart.pause();
          break;
        case 'top_button':
          let value = origin;
          if (this.data.dir) {
            value = value - 3;
          } else {
            value = value + 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: value, y: yp, z: zp },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;
        case 'bottom_button':
          let value2 = origin;
          if (this.data.dir) {
            value2 = value2 + 3;
          } else {
            value2 = value2 - 3;
          }
          chart.setAttribute('animation__2', {
            property: 'position',
            to: { x: value2, y: yp, z: zp },
            dur: 6000,
            easing: 'linear',
            loop: false,
          });
          chart.play();
          break;
      }
    },
  },
});
