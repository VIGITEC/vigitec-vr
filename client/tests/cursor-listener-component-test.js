const { JSDOM } = require('jsdom');
const AFRAME = require('aframe');

// Configura un DOM virtual antes de cada prueba
beforeEach(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.window = dom.window;
  global.document = dom.window.document;
  global.self = dom.window;
});

// Limpia el DOM virtual después de cada prueba
afterEach(() => {
  delete global.document;
});

describe('Componente cursor-listener', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('a-entity');
    el.setAttribute('cursor-listener', {});
    document.body.appendChild(el);
  }); z

  afterEach(() => {
    document.body.removeChild(el);
  });

  it('Debe estar registrado', () => {
    assert.strictEqual(AFRAME.components['cursor-listener'].name, 'cursor-listener');
  });

  it('Debe tener esquema predeterminado', () => {
    const schema = AFRAME.components['cursor-listener'].schema;
    assert.deepEqual(schema.disable_cursor, { type: 'string', default: '#' });
  });

  it('Debe cambiar el atributo raycaster cuando se desactiva el cursor', () => {
    const cursor = document.createElement('a-cursor');
    el.appendChild(cursor);
    el.emit('cursor-disabled', {});
    assert.strictEqual(cursor.getAttribute('raycaster').objects, 'disabled_now');
  });

  it('Debe restablecer el atributo raycaster cuando se activa el cursor', () => {
    const cursor = document.createElement('a-cursor');
    el.appendChild(cursor);
    el.emit('cursor-enabled', {});
    assert.strictEqual(cursor.getAttribute('raycaster').objects, '[floor]');
  });
});
