const tabs = document.querySelectorAll('.tab');
const icons = document.querySelectorAll('.icon');
const tabContents = document.querySelectorAll('.tabcontent');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        icons.forEach(icon => icon.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tabs.forEach(t => t.classList.add('inactive'));
        icons.forEach(icon => icon.classList.add('inactive'));
        tabContents.forEach(content => content.classList.add('inactive'));

        const tabId = tab.getAttribute('data-tab');
        tab.classList.add('active');
        document.querySelector(`.tabcontent[data-tab="${tabId}"]`).classList.add('active');
        document.querySelector(`.icon[data-tab="${tabId}"]`).classList.add('active');
    });
});

const tabContentObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0 });

tabContents.forEach(content => {
    tabContentObserver.observe(content);
});
