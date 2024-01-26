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


describe('AFRAME "chart" Component', () => {
  let sceneEl;
  let chartEl;

  beforeEach(() => {
    // Set up the scene and the chart element for testing
    sceneEl = document.createElement('a-scene');
    chartEl = document.createElement('a-entity');
    chartEl.setAttribute('chart', '');
    sceneEl.appendChild(chartEl);
    document.body.appendChild(sceneEl);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.removeChild(sceneEl);
  });

  it('should be registered as an A-Frame component', () => {
    assert.strictEqual(AFRAME.components['chart'] !== undefined, true);
  });

  it('should have default schema properties', () => {
    const defaultSchema = {
      target_charts: '#',
      origin_posX: 0,
      origin_posY: 0,
      origin_posZ: 0,
      dir: true
    };

    for (const property in defaultSchema) {
      assert.strictEqual(chartEl.getAttribute('chart')[property], defaultSchema[property]);
    }
  });

  it('should respond to click event', () => {
    let isClicked = false;
    chartEl.addEventListener('click', () => {
      isClicked = true;
    });
    chartEl.emit('click');
    assert.strictEqual(isClicked, true);
  });

  it('should handle "increase_scale__button" case', () => {
    // Simulate the case and assert the expected behavior
    let scaleBeforeClick;
    let scaleAfterClick;

    // Get the initial scale of the chart
    scaleBeforeClick = chartEl.getAttribute('scale');

    // Simulate a click on the "increase_scale__button"
    chartEl.emit('increase_scale__button');

    // Allow for the event to be processed
    setTimeout(() => {
      // Get the scale of the chart after the click
      scaleAfterClick = chartEl.getAttribute('scale');

      // Assert that the scale has increased
      assert.strictEqual(scaleAfterClick.x, scaleBeforeClick.x + 0.1);
      assert.strictEqual(scaleAfterClick.y, scaleBeforeClick.y + 0.1);
      assert.strictEqual(scaleAfterClick.z, scaleBeforeClick.z + 0.1);
    }, 100);
  });

  it('should handle "decrease_scale__button" case', () => {
    // Simulate the case and assert the expected behavior
  });

  it('should handle "forward_button" case', () => {
    // Simulate the case and assert the expected behavior
  });

  it('should handle "after_button" case', () => {
    // Simulate the case and assert the expected behavior
  });

  it('should handle "bottom_button" case', () => {
    // Simulate the case and assert the expected behavior
  });

  it('should handle "default" case', () => {
    // Simulate the case and assert the expected behavior
  });
});

