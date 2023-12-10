let mode = document.querySelector("#mode");

// only for index containt box 
let para1 = document.querySelector("#para-1");
let para2 = document.querySelector("#para-2");

mode.onclick = function () {

    if (mode.classList.contains("ri-moon-fill")) {
        mode.classList.replace("ri-moon-fill", "ri-sun-fill");
        document.documentElement.style.setProperty('--primary-bg', '#182b4f');
        document.documentElement.style.setProperty('--secondry-bg', '#d2d9e4');
        document.documentElement.style.setProperty('--ball-bg', '#b2c8ed');
        document.documentElement.style.setProperty('--ball-shadow', '#062051');
        document.documentElement.style.setProperty('--nav-btn-shadow', '#021634');
        document.documentElement.style.setProperty('--nav-containt-h', '#000');

        para1.classList.replace("para-1", "para-1-dark");
        para2.classList.replace("para-1", "para-1-dark");

    }
    else {
        mode.classList.replace("ri-sun-fill", "ri-moon-fill");
        document.documentElement.style.setProperty('--primary-bg', '#B2C8ED');
        document.documentElement.style.setProperty('--secondry-bg', '#5179b6');
        document.documentElement.style.setProperty('--ball-bg', '#395886');
        document.documentElement.style.setProperty('--ball-shadow', '#D5DEEF');
        document.documentElement.style.setProperty('--nav-btn-shadow', '#5D7BA7');
        document.documentElement.style.setProperty('--nav-containt-h', '#000');

        para1.classList.replace("para-1-dark", "para-1");
        para2.classList.replace("para-1-dark", "para-1");
    }
};