let sliderItem = document.querySelectorAll(".slider-item");
let actualCount = 0;

function slider() {
    for (let i = 0; i < sliderItem.length; i ++) {
        sliderItem[i].classList.add("hidden");
    }
        sliderItem[actualCount].classList.remove("hidden");
}

slider ();


document.querySelector(".btn-down").onclick = function () {
    if (actualCount-1 == -1) {
        actualCount = sliderItem.length - 1;
    } else {
        actualCount--;
    }

    slider();

}

document.querySelector(".btn-up").onclick = function () {
    if (actualCount + 1 == sliderItem.length) {
        actualCount = 0;
    } else {
        actualCount++;
    }
    slider();
}