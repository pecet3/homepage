{
    // variables needed for multiple functions
    const image = document.querySelector(".js-image");
    const themeButton = document.querySelector(".js-themeButton");

    // functions needed for change the main photo
    const onImageButtonLeftClick = () => {
        image.src = "https://i.ibb.co/njr61Jd/image1.jpg";
    };
    const onImageButtonRightClick = () => {
        image.src = "https://i.ibb.co/pKkmXcs/image2.jpg";
    };
    const changeMainPhoto = () => {
        const image = document.querySelector(".js-image");
        const buttonLeft = document.querySelector(".js-buttonLeft");
        const buttonRight = document.querySelector(".js-buttonRight");
        buttonLeft.addEventListener('click', onImageButtonLeftClick);
        buttonRight.addEventListener('click', onImageButtonRightClick);
    };

    // functions needed for change a theme
    const onThemeButtonClick = () => {
        const body = document.querySelector(".js-body");
        const title = document.querySelector(".js-header__title");
        const main = document.querySelector(".js-main");
        const header = document.querySelector(".js-main__header");
        const header2 = document.querySelector(".js-main__header2");
        const mainPhoto = document.querySelector(".js-image");
        const footer = document.querySelector(".js-footer");
        const navigation = document.querySelector(".js-navigation");
        const caption = document.querySelector(".js-table__caption");

        title.classList.toggle('header__title--dark');
        body.classList.toggle('body--dark');
        main.classList.toggle('main--dark');
        header.classList.toggle('main__header--dark');
        header2.classList.toggle('main__header--dark');
        mainPhoto.classList.toggle('header__photo--dark');
        footer.classList.toggle('footer--dark');
        navigation.classList.toggle('navigation--dark');
        caption.classList.toggle('main__header--dark');
        themeButtonIconSwitch();
    };
    const themeButtonIconSwitch = () => {
        if (themeButton.innerText == "🌙") {
            themeButton.innerText = "🌞";
        }
        else {
            themeButton.innerText = "🌙";
        }
    };
    const changeTheme = () => {
        themeButton.addEventListener('click', onThemeButtonClick);
    };

    // functions for table 
    const addPrices = () => {
        const price1 = Number(document.querySelector(".js-price1").innerText);
        const price2 = Number(document.querySelector(".js-price2").innerText);
        const price3 = Number(document.querySelector(".js-price3").innerText);
        const price4 = Number(document.querySelector(".js-price4").innerText);
        const price5 = Number(document.querySelector(".js-price5").innerText);
        const price6 = Number(document.querySelector(".js-price6").innerText);
        return price1 + price2 + price3 + price4 + price5 + price6;
    };


    const typeFinalValueOfGear = () => {
        const finalValueOfGear = document.querySelector(".js-finalValueOfGear");
        finalValueOfGear.innerText = addPrices();
    };

    ////////////////////////////////////
    const welcome = () => {
        console.log("Witaj w konsoli :)");
    };

    const init = () => {
        welcome();
        typeFinalValueOfGear();
        changeMainPhoto();
        changeTheme();

    };

    init();
}