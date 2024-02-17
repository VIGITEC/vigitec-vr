/* global  assert, setup, suite, test */
var entityFactory = require('../helpers').entityFactory;

suite('chart', function () {
    setup(function (done) {
        var el = this.el = entityFactory();
        el.setAttribute('chart', 'target_charts: example; origin_posX: 0; origin_posY: 0; origin_posZ: 0; dir: true;');
        if (el.hasLoaded) { done(); }
        el.addEventListener('loaded', function () {
            done();
        });
    });

    test('default values', function () {
        var el = this.el;
        assert.equal(el.getAttribute('chart'), 'target_charts: example; origin_posX: 0; origin_posY: 0; origin_posZ: 0; dir: true;');
    });

    suite('schema', function () {
        test('can get defined attributes', function () {
            var el = this.el;
            el.setAttribute('chart', 'target_charts: example2; origin_posX: 5; origin_posY: 5; origin_posZ: 5; dir: true;');
            assert.shallowDeepEqual(el.getAttribute('chart'), 'target_charts: example2; origin_posX: 5; origin_posY: 5; origin_posZ: 5; dir: true;');
        });
    });
});