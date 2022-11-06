console.log("Witaj developerze ;D")
let image = document.querySelector(".js-image");
let buttonLeft = document.querySelector(".js-buttonLeft");
let buttonRight = document.querySelector(".js-buttonRight");

buttonLeft.addEventListener('click', () => {
    image.src = "https://i.ibb.co/njr61Jd/image1.jpg";
})

buttonRight.addEventListener('click', () => {
    image.src = "https://i.ibb.co/pKkmXcs/image2.jpg";
})

let themeButton = document.querySelector(".js-header__themeButton");
let body = document.querySelector(".js-body");
let title = document.querySelector(".js-header__title");
let main = document.querySelector(".js-main");
let header = document.querySelector(".js-main__header");
let header2 = document.querySelector(".js-main__header2");

let mainPhoto = document.querySelector(".js-image");
let footer = document.querySelector(".js-footer");
let navigation = document.querySelector(".js-navigation");
let caption = document.querySelector(".js-table__caption");

themeButton.addEventListener('click', () => {
    title.classList.toggle('header__title--dark');
    body.classList.toggle('body--dark');
    main.classList.toggle('main--dark');
    header.classList.toggle('main__header--dark');
    header2.classList.toggle('main__header--dark');
    mainPhoto.classList.toggle('header__photo--dark');
    footer.classList.toggle('footer--dark');
    navigation.classList.toggle('navigation--dark');
    caption.classList.toggle('main__header--dark');
    // themeButton.innerText = body.classList.contains("dark")
    // ? "🌙"
    // : "🌞"
    // I dunno why it doesn't work...
    if (themeButton.innerText == "🌙"){
        themeButton.innerText = "🌞";
    }
    else {
        themeButton.innerText = "🌙";
    }
});

let price1 = Number(document.querySelector(".js-price1").innerText);
let price2 = Number(document.querySelector(".js-price2").innerText);
let price3 = Number(document.querySelector(".js-price3").innerText);
let price4 = Number(document.querySelector(".js-price4").innerText);
let price5 = Number(document.querySelector(".js-price5").innerText);
let price6 = Number(document.querySelector(".js-price6").innerText);
let finalAmount = document.querySelector(".js-finalAmount");

function addPrices(price1,price2,price3,price4,price5,price6){
    let result = price1 + price2 + price3 + price4 + price5+ price6;
    finalAmount.innerText = result;
}

addPrices(price1,price2,price3,price4,price5,price6);