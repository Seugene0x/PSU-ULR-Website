(function () {
    var mobileQuery = window.matchMedia('(max-width: 900px)');

    function init() {
        var nav = document.querySelector('nav');
        if (!nav) return;

        var toggle = nav.querySelector('.nav-toggle');
        var links = nav.querySelector('.nav-links');

        if (toggle && links) {
            toggle.addEventListener('click', function () {
                var open = nav.classList.toggle('nav-open');
                toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
        }

        Array.prototype.forEach.call(nav.querySelectorAll('.dropdown-btn'), function (btn) {
            btn.addEventListener('click', function (event) {
                if (!mobileQuery.matches) return;
                event.preventDefault();
                var parent = btn.parentElement;
                var open = parent.classList.toggle('dropdown-open');
                btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            });
        });

        mobileQuery.addEventListener('change', function () {
            nav.classList.remove('nav-open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
            Array.prototype.forEach.call(nav.querySelectorAll('.dropdown-open'), function (item) {
                item.classList.remove('dropdown-open');
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
