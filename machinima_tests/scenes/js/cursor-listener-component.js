/* global AFRAME */
/**Componente para desactivar cursor de movimiento cuando se apunte a una grafica */
AFRAME.registerComponent('cursor-listener', {
  schema: {
    disable_cursor: { type: 'string', default: '#' },
  },

  init: function () {
    // Do something when component first attached.
    this.el.addEventListener('raycaster-intersection', evt => {
      const intersectedEl = evt.detail.intersections[0].object.el;
      const cursor = document.getElementById(this.data.disable_cursor);
      if (intersectedEl.getAttribute('class') === 'babiaxraycasterclass') {
        cursor.setAttribute('raycaster', 'objects: disabled_now');
      } else {
        cursor.setAttribute('raycaster', 'objects: [floor]');
      }
    });
  },
});
