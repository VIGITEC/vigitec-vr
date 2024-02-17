/* global  assert, setup, suite, test */
var entityFactory = require('../helpers').entityFactory;

suite('spawn-in-circle', function () {
    setup(function (done) {
        var el = this.el = entityFactory();
        el.setAttribute('spawn-in-circle', 'radius:3;');
        if (el.hasLoaded) { done(); }
        el.addEventListener('loaded', function () {
            done();
        });
    });

    test('default values', function () {
        var el = this.el;
        assert.equal(el.getAttribute('spawn-in-circle'), 'radius:3;');
    });

    suite('schema', function () {
        test('can get defined attributes', function () {
            var el = this.el;
            el.setAttribute('spawn-in-circle', 'radius:4;');
            assert.shallowDeepEqual(el.getAttribute('spawn-in-circle'), 'radius:4;');
        });
    });
});