(function() {
    'use strict';
    
    var callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var mode = entry.target.getAttribute('data-mode');
                var delay = entry.target.getAttribute('data-delay');
                
                entry.target.classList.add('animated', mode);
                entry.target.classList.remove('animate');
                if (delay && window.innerWidth > 576) {
                    entry.target.classList.add(delay);
                }
            }
        })
    };

    var observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: .3
    });

    var targets = document.querySelectorAll('.animate');

    targets.forEach(target => {
        observer.observe(target);
    });
})();