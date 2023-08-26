/* global AFRAME */
AFRAME.registerComponent('move-on-look', {
  schema: {
    movement_object: { type: 'string', default: '#' },
    floor_id: { type: 'string', default: '#' },
  },

  events: {
    click: function (evt) {
      const object = evt.detail.intersection.object;
      if (object.el.id === this.data.floor_id) {
        const { x, y, z } = evt.detail.intersection.point;
        const camera = document.getElementById(this.data.movement_object);
        const ci = camera.getAttribute('position');
        const distance = this.euclideanDistance(x, z, ci.x, ci.z);
        const time = (distance / 2) * 300;
        camera.setAttribute('animation', {
          property: 'position',
          to: { x: x, y: y, z: z },
          dur: time,
          easing: 'linear',
          loop: false,
        });
      }
    },
  },

  euclideanDistance: function (x1, y1, x2, y2) {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
});
