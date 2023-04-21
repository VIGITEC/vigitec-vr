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
      console.log(
        'La clase es..................',
        intersectedEl.getAttribute('class')
      );
      if (intersectedEl.getAttribute('class') === 'babiaxraycasterclass') {
        console.log('Entra aqui....................... if');
        cursor.setAttribute('raycaster', 'objects: disabled_now');
      } else {
        console.log('Entra aqui....................... else');
        cursor.setAttribute('raycaster', 'objects: [floor]');
      }
    });
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
