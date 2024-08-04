document.addEventListener('DOMContentLoaded', function () {
    // Get all the icons
    const twitterIcon = document.querySelector('.ri-twitter-fill');
    const facebookIcon = document.querySelector('.ri-facebook-fill');
    const instagramIcon = document.querySelector('.ri-instagram-line');
    const linkedinIcon = document.querySelector('.ri-linkedin-box-fill');

    // Wrap each icon in an anchor (<a>) tag with the corresponding link
    twitterIcon.outerHTML = `<a href="https://twitter.com/your_profile" target="_blank">${twitterIcon.outerHTML}</a>`;
    facebookIcon.outerHTML = `<a href="https://facebook.com/your_profile" target="_blank">${facebookIcon.outerHTML}</a>`;
    instagramIcon.outerHTML = `<a href="https://instagram.com/your_profile" target="_blank">${instagramIcon.outerHTML}</a>`;
    linkedinIcon.outerHTML = `<a href="https://linkedin.com/in/your_profile" target="_blank">${linkedinIcon.outerHTML}</a>`;
});


let menuI = document.querySelector(".ri-menu-line");
let closeI = document.querySelector(".ri-close-line");
let menuBtn = document.querySelector(".menu");
let menuBar = document.querySelector(".menu-bar")
var flag = 1;
menuBtn.addEventListener("click", () => {
    if (flag === 1) {
        menuI.style.display = `none`;
        closeI.style.display = `block`;
        gsap.to(menuBar, {
            top: `0`
        })
        flag = 0;
    } else {
        menuI.style.display = `block`;
        closeI.style.display = `none`;
        gsap.to(menuBar, {
            top: `-60vh`
        })
        gsap.to(dropDownList, {
            top: `-40vh`
        })
        flag = 1;
    }
});

let dropDown = document.querySelector(".drop-down-head");
let dropDownList = document.querySelector(".drop-down-list");
var flag1 = 0;
dropDown.addEventListener("click", () => {
    if (flag1 === 0) {
        gsap.to(dropDownList, {
            top: `-7vh`
        })
        flag1 = 1;
    } else {
        gsap.to(dropDownList, {
            top: `-60vh`
        })
        flag1 = 0;
    }
});

let summary = document.querySelectorAll(".dmc-page8 .dmc-page8-container details summary");
var flag2 = 0;
summary.forEach(function (elem) {
    elem.addEventListener('click', () => {
        if (flag2 === 0) {
            gsap.to(elem.childNodes[1], {
                color: `#B640BB`
            }, "a1");
            gsap.to(elem.childNodes[3], {
                color: `#B640BB`,
                rotate: `-90`
            }, "a1");
            flag2 = 1;
        } else {
            gsap.to(elem.childNodes[1], {
                color: `#000`
            }, "a1");
            gsap.to(elem.childNodes[3], {
                color: `#000`,
                rotate: `90`
            }, "a1");
            flag2 = 0;
        }
    });
});
// console.log(e);




/** Header & go to top btn active on page scroll */

const header = document.querySelector("[data-header]");
const goToTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 400) {
        header.classList.add("active2");
        goToTopBtn.classList.add("active2");
    } else {
        header.classList.remove("active2");
        goToTopBtn.classList.remove("active2");
    }
});