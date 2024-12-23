const counterElement = document.getElementById("counterCities");
let counterCities = 300;
let intervalId;

const counterSection = document.querySelector(".bottom-container");
const bottomItem = document.querySelectorAll(".bottom-item");

const contentSection = document.querySelector(".content-container");
const videoItem = document.querySelector(".video-container");
const textItem = document.querySelector(".text-container");

const observerContent = new IntersectionObserver(entries => {
    videoItem.classList.toggle('show', entries[0].isIntersecting);
    textItem.classList.toggle('show', entries[0].isIntersecting);
}, {
    threshold: 0.5
});

const observerFeatures = new IntersectionObserver(entries => {
    //console.log(entries);
    bottomItem.forEach(entry => {
        entry.classList.toggle('show', entries[0].isIntersecting);
    });

    if (bottomItem[1].classList.contains('show')) {
        clearInterval(intervalId);
        counterCities = 300;
        counterElement.textContent = counterCities;
        
        intervalId = setInterval(() => {
            counterCities += 30;
            counterElement.textContent = counterCities;

            if (counterCities >= 3000) {
                clearInterval(intervalId);
            }
        }, 0.04);
    }
}, {
    threshold: 1
});


observerContent.observe(contentSection);
observerFeatures.observe(counterSection);