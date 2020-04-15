(function(){
    'use strict';
    var cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            var values = card.querySelectorAll('.skill__value');
            values.forEach(value => {
                var score = value.getAttribute('data-value');
                value.style.transform = `translate3d(-${100 - score}%, 0, 0)`;
            })
        });
        card.addEventListener('mouseleave', () => {
            var values = card.querySelectorAll('.skill__value');
            values.forEach(value => {
                value.style.transform = `translate3d(-100%, 0, 0)`;
            })
        });
    })

    // <div class=" block stateA"></div>

    var stateA = anime();
    var stateB = anime();

    document.querySelector('.block').addEventListener('click', (e) => {
        var block = e.target;
        if (block.classList.contains('stateA')) {
            block.classList.remove('stateA')
            block.classList.add('stateB')

            stateB.restart();
        } else {
            block.classList.remove('stateB')
            block.classList.add('stateA')

            stateA.restart();
        }
    })

})();