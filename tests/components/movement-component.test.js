/* global  assert, setup, suite, test */
var entityFactory = require('../helpers').entityFactory;

suite('move-on-look', function () {
    setup(function (done) {
        var el = this.el = entityFactory();
        el.setAttribute('move-on-look', 'movement_object: camera_example; floor_id: floor_example;');
        if (el.hasLoaded) { done(); }
        el.addEventListener('loaded', function () {
            done();
        });
    });

    test('default values', function () {
        var el = this.el;
        assert.equal(el.getAttribute('move-on-look'), 'movement_object: camera_example; floor_id: floor_example;');
    });

    suite('schema', function () {
        test('can get defined attributes', function () {
            var el = this.el;
            el.setAttribute('move-on-look', 'movement_object: camera_example2; floor_id: floor_example2;');
            assert.shallowDeepEqual(el.getAttribute('move-on-look'), 'movement_object: camera_example2; floor_id: floor_example2;');
        });
    });
});