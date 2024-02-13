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

    suite('events', function () {
        setup(function (done) {
            var el = this.el;
            // Creando el panel GUI
            var gui = entityFactory();
            gui.setAttribute('gui-flex-container', '')

            gui.addEventListener('loaded', function () {
                // Creando botones para interactuar
                // Botón de rotar a la izquierda
                var rotate_left__button = entityFactory();
                rotate_left__button.setAttribute('gui-button', '')
                rotate_left__button.classList.add('rotate_left__button')
                // Botón de rotar a la derecha
                var rotate_rigth_button = entityFactory();
                rotate_rigth_button.setAttribute('gui-button', '')
                rotate_rigth_button.classList.add('rotate_rigth_button')

                // Botón de mover a la izquierda
                var left_button = entityFactory();
                left_button.setAttribute('gui-button', '')
                left_button.classList.add('left_button')
                // Botón de mover a la derecha
                var rigth_button = entityFactory();
                rigth_button.setAttribute('gui-button', '')
                rigth_button.classList.add('rigth_button')

                // Botón de mover arriba
                var top_button = entityFactory();
                top_button.setAttribute('gui-button', '')
                top_button.classList.add('top_button')
                // Botón de mover abajo
                var bottom_button = entityFactory();
                bottom_button.setAttribute('gui-button', '')
                bottom_button.classList.add('bottom_button')

                // Botón de mover atrás
                var forward_button = entityFactory();
                forward_button.setAttribute('gui-button', '')
                forward_button.classList.add('forward_button')
                // Botón de mover adelante
                var after_button = entityFactory();
                after_button.setAttribute('gui-button', '')
                after_button.classList.add('after_button')

                // Botón de aumentar escala
                var increase_scale__button = entityFactory();
                increase_scale__button.setAttribute('gui-button', '')
                increase_scale__button.classList.add('increase_scale__button')
                // Botón de decrementar escala
                var decrease_scale__button = entityFactory();
                decrease_scale__button.setAttribute('gui-button', '')
                decrease_scale__button.classList.add('decrease_scale__button')

                var elements = [rotate_left__button,
                    rotate_left__button,
                    left_button,
                    rigth_button,
                    top_button,
                    bottom_button,
                    forward_button,
                    after_button,
                    increase_scale__button,
                    decrease_scale__button];

                elements.forEach(elem => {
                    gui.appendChild(elem);
                })

                done();
            });
        });

        test('click to rotate_left__button', function () {
            
        });
    });
});