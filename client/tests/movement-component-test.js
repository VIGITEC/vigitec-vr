const { JSDOM } = require('jsdom');
const AFRAME = require('aframe');

// Configura un DOM virtual antes de cada prueba
beforeEach(() => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.document = dom.window.document;
});

// Limpia el DOM virtual después de cada prueba
afterEach(() => {
  delete global.document;
});


describe('move-on-look component', () => {
  let sceneEl;
  let entityEl;

  beforeEach(() => {
    // Configurar la escena y el elemento para las pruebas
    sceneEl = document.createElement('a-scene');
    entityEl = document.createElement('a-entity');
    entityEl.setAttribute('move-on-look', '');
    sceneEl.appendChild(entityEl);
    document.body.appendChild(sceneEl);
  });

  afterEach(() => {
    // Limpiar después de cada prueba
    document.body.removeChild(sceneEl);
  });

  it('debería estar registrado como un componente de A-Frame', () => {
    assert.strictEqual(AFRAME.components['move-on-look'] !== undefined, true);
  });

  it('debería mover el objeto cuando se mira', () => {
    // Simular la mirada al objeto
    entityEl.emit('look');

    // Permitir que el evento sea procesado
    setTimeout(() => {
      // Obtener la posición del objeto después de la mirada
      let positionAfterLook = entityEl.getAttribute('position');

      // Asegurar que el objeto se ha movido
      assert.notStrictEqual(positionAfterLook, {x: 0, y: 0, z: 0});
    }, 100);
  });

  it('debería identificar correctamente el suelo según el floor_id', () => {
    // Establecer el floor_id
    entityEl.setAttribute('move-on-look', {floor_id: '#floor'});

    // Crear el elemento del suelo
    let floorEl = document.createElement('a-entity');
    floorEl.setAttribute('id', 'floor');
    sceneEl.appendChild(floorEl);

    // Asegurar que el suelo se identifica correctamente
    assert.strictEqual(entityEl.components['move-on-look'].data.floor_id, '#floor');
  });
});

