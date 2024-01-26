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


describe('spawn-in-circle', function() {
  var spawnInCircle;

  beforeEach(function() {
    spawnInCircle = new AFRAME.components['spawn-in-circle'].Component();
  });

  describe('schema', function() {
    it('debería tener un radio por defecto de 1', function() {
      assert.equal(spawnInCircle.schema.radius.default, 1);
    });
  });

  describe('randomPointOnCircle', function() {
    it('debería devolver un objeto con propiedades x e y', function() {
      var point = spawnInCircle.randomPointOnCircle(1, 0);
      assert.isObject(point);
      assert.hasAllKeys(point, ['x', 'y']);
    });

    it('debería devolver un punto en el círculo de radio dado', function() {
      var radius = 5;
      var point = spawnInCircle.randomPointOnCircle(radius, 0);
      var distance = Math.sqrt(point.x * point.x + point.y * point.y);
      assert.approximately(distance, radius, 0.0001);
    });
  });
});
