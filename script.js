const buttons = document.getElementById("buttons");
const slide = document.querySelectorAll(".slide");
let intervalId = null;
slide.forEach((e, i) => {

    let span = document.createElement("span");
    span.classList.add(`btns`);
    span.classList.add(`${i}`);
    buttons.appendChild(span);
})

const btns = document.querySelectorAll(".btns");
const slider = document.querySelector(".slider");
let counter = 0;
btns.forEach(element => {
    element.addEventListener('click', function () {
        if (intervalId != null) {
            clearInterval(intervalId);
            interval();
        }
        counter = element.classList[1];
        resetAllButtons();
        slideimage(counter)
    })
});
const slideimages = () => {
    slide.forEach(
        (slide, index) => {
            if (index > 0)
                slide.style.left = index * 101 + `%`;
        }
    );
}
slideimages();
function goPrev() {
    if (intervalId != null) {
        clearInterval(intervalId);
        interval();
    }
    resetAllButtons();
    if (counter > 0)
        counter = counter - 1;
    else if (counter == 0) {
        counter = slide.length - 1;
    }
    slideimage(counter);

}
function goNext() {
    if (intervalId != null) {
        clearInterval(intervalId);
        interval();
    }
    resetAllButtons();
    if (counter < slide.length - 1) {
        counter = counter + 1;
    } else
        counter = 0;
    slideimage(counter);
}

function slideimage(counter) {
    if (counter >= 0 && counter < slide.length) {
        slider.style.transform = `translateX(-${counter * 101}%)`;
        document.body.style.backgroundImage = `url(${slide[counter].src})`;
        btns[counter].style.backgroundColor = "#fff";
        btns[counter].style.scale = "200%";
        if (counter != 0) {
            btns[counter - 1].style.scale = "100%";
            btns[counter - 1].style.backgroundColor = "#fff";
        }
        else {
            btns[slide.length - 1].style.scale = "100%";
            btns[slide.length - 1].style.backgroundColor = "#fff";
        }
    }
}

function resetAllButtons() {
    btns.forEach((element, index) => {
        if (index >= 0) {
            element.style.scale = "100%";
            element.style.backgroundColor = "#fff";
        }
    })
}
slideimage(counter)
function interval() {
    let i = 5;
    intervalId = setInterval(function () {
        counter++;
        slideimage(counter);
        if (counter == slide.length - 1 || counter == slide.length) {
            counter = -1;
        }
    }, 5000)
}
window.onload = interval();
