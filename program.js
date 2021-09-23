const businessCardElement = document.querySelector("#business-card");
const phoneNumber = document.querySelector("#phone-number");

const makeMyCardPurple = () => {
    businessCardElement.style.background = "purple";
}

const makeMyCardWhite = () => {
    businessCardElement.style.background = "white";
};

const makeMyCardSpin = () => {

    let currentDegrees = 0;
    setInterval(() => {
        currentDegrees = currentDegrees + 1;
        if (currentDegrees === 360) currentDegrees = 0;
        businessCardElement.style.transform = `rotateZ(${currentDegrees}deg)`;
    }, 10);


};

// businessCardElement.addEventListener(
//     "click", 
//     function (event) {
//         console.log(event.x, event.y);
//         if (businessCardElement.style.background === "purple") {
//             makeMyCardWhite();
//         } else {
//             makeMyCardPurple();
//         }
//     }
// );

const easterEggListener = function (event) {
    console.log("test");
    event.stopPropagation();
    makeMyCardPurple();
}

phoneNumber.addEventListener("click", easterEggListener);
setTimeout(() => {
    phoneNumber.removeEventListener("click", easterEggListener);
}, 5000);


const buttonsSection = document.querySelector("#buttons-section");

buttonsSection.addEventListener("click", function (event) {

    const exactButtonThatWasClicked = event.target;

    const theIdOntheButton = exactButtonThatWasClicked.id;

    if (theIdOntheButton === "purple") {
        makeMyCardPurple();
    } else if (theIdOntheButton === "white") {
        makeMyCardWhite();
    } else if (theIdOntheButton === "spin") {
        makeMyCardSpin();
    } else {
        throw new Error("UNKNOWN ACTION")
    }

});

setTimeout(() => {
    const newButton = document.createElement("button");
    newButton.innerText = "MAKE MY CARD WHITE";
    newButton.id = "white";
    buttonsSection.appendChild(newButton);
}, 5000);

// setTimeout(() => {
//     makeMyCardPurple();
// }, 5000);

