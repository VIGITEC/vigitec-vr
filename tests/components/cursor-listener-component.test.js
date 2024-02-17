/* global  assert, setup, suite, test */
var entityFactory = require('../helpers').entityFactory;

suite('cursor-listener', function () {
    setup(function (done) {
        var el = this.el = entityFactory();
        el.setAttribute('cursor-listener', 'disable_cursor: example;');
        if (el.hasLoaded) { done(); }
        el.addEventListener('loaded', function () {
            done();
        });
    });

    test('default values', function () {
        var el = this.el;
        assert.equal(el.getAttribute('cursor-listener'), 'disable_cursor: example;');
    });

    suite('schema', function () {
        test('can get defined attributes', function () {
            var el = this.el;
            el.setAttribute('cursor-listener', 'disable_cursor: example2;');
            assert.shallowDeepEqual(el.getAttribute('cursor-listener'), 'disable_cursor: example2;');
        });
    });
});