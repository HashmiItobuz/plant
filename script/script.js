const collectionBackButton = document.getElementById("collection-back-button");
const collectionForwardButton = document.getElementById("collection-forward-button");
const sliderCards = document.querySelectorAll(".collection-slider");
const clientBackButton = document.getElementById("client-back-button");
const clientForwardButton = document.getElementById("client-forward-button");
const clientSliderCards = document.querySelectorAll(".client-slider");


let flag = 0;

sliderDisplay(flag);
clientDisplay(flag);

collectionBackButton.addEventListener("click", () => {
    let n1 = 1;
    flag = flag - n1;
    sliderDisplay(flag);
});

collectionForwardButton.addEventListener("click", () => {
    let n1 = 1;
    flag = flag + n1;
    sliderDisplay(flag);
});

function sliderDisplay(num) {
    for(let items of sliderCards) {
        items.classList.add("hidden");
    }

    if(num >= sliderCards.length) {
        flag = 0;
        num = 0;

    }else if(num < 0) {
        flag = sliderCards.length - 1;
        num = sliderCards.length - 1;
    }
    sliderCards[num].classList.remove("hidden");
}


clientBackButton.addEventListener('click', () => {
    let n1 = 1;
    flag = flag - n1;
    clientDisplay(flag);
});

clientForwardButton.addEventListener('click', () => {
    let n1 = 1;
    flag = flag + n1;
    clientDisplay(flag);
});

function clientDisplay(num1) {
    for(let items of clientSliderCards) {
        items.classList.add("hidden");
    }

    if(num1 >= clientSliderCards.length) {
        flag = 0;
        num1 = 0;

    }else if(num1 < 0) {
        flag = clientSliderCards.length - 1;
        num1 = clientSliderCards.length - 1;
    }
    clientSliderCards[num1].classList.remove("hidden");
}