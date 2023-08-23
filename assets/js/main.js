const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        // Verifica se o conteúdo alvo já está ativo
        if (target.classList.contains('filters__active')) {
            target.classList.remove('filters__active');
            tab.classList.remove('filter-tab-active');
        } else {
            tabContents.forEach(tc => {
                tc.classList.remove('filters__active');
            });
            target.classList.add('filters__active');

            tabs.forEach(t => {
                t.classList.remove('filter-tab-active');
            });
            tab.classList.add('filter-tab-active');
        }
    });
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,

})

sr.reveal('.profile__border')
sr.reveal('.profile__name', { delay: 500 })
sr.reveal('.profile__subtitulo', { delay: 600 })
sr.reveal('.profile__social', { delay: 700 })
sr.reveal('.profile__info-group', { interval: 100, delay: 700 })
sr.reveal('.profile__buttons', { delay: 800 })
sr.reveal('.filters__content', { delay: 900 })
sr.reveal('.filters', { delay: 1000 })