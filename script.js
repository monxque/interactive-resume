showSlides();
intro_transition();
art_transition();
aside_transition();
header_transition();

// slideshow effect
function showSlides() {
    //get all the slides
    let slides = document.querySelectorAll(".mySlides");
    let numbertext = document.querySelector(".numbertext");

    // set the first slide as active
    if (slides[0] != null) {
        slides[0].classList.add("active");
        numbertext.innerHTML = `1 / ${slides.length}`;
    }

    //inactive class is added by JS instead of default in CSS so that user can view the slides if JS is disabled.
    for (let i = 1; i < slides.length; i++) {
        slides[i].classList.add("inactive");
    }

    // add "click" event listener to the arrows
    let left = document.querySelector(".prev");
    let right = document.querySelector(".next");

    // change the slide to show according to left or right click
    let slideIndex = 0;
    left.addEventListener("click", () => {
        slideIndex -= 1;
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.add("inactive");
        }
        slides[slideIndex].classList.remove("inactive");
        slides[slideIndex].classList.add("active");
        numbertext.innerHTML = `${slideIndex + 1} / ${slides.length}`;
    })

    right.addEventListener("click", () => {
        slideIndex += 1;
        if (slideIndex > slides.length - 1) { slideIndex = 0; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            slides[i].classList.add("inactive");
        }
        slides[slideIndex].classList.remove("inactive");
        slides[slideIndex].classList.add("active");
        numbertext.innerHTML = `${slideIndex + 1} / ${slides.length}`;
    })

}

// articles transition
function art_transition() {
    let articles = document.querySelectorAll("article");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                articles.forEach(article => {
                    article.classList.remove('article-transition');
                })
                entry.target.classList.add('article-transition');
            } 
        });
    });

    articles.forEach(article => {
        observer.observe(article);
        article.classList.remove('article-transition');
    })
}

// header introduction transition
function intro_transition() {
    let intro = document.querySelector(".header-intro");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('header-intro-transition');
                return;
            }

        });
    });
    intro.classList.remove('header-intro-transition');
    observer.observe(intro);

}

// aside section transition
function aside_transition() {
    let aside = document.querySelector("aside");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aside-transition');
                return;
            }

            entry.target.classList.remove('aside-transition');
        });
    });
    aside.classList.remove('aside-transition');
    observer.observe(aside);

}

// website header transition
function header_transition() {
    let header = document.querySelector("header");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('header-transition');
                return;
            }
        });
    });
    header.classList.remove('header-transition');
    observer.observe(header);

}

// back to top button
let mybutton = document.querySelector("#back-to-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// to show and hide the Credit section
let isCreditOn = false;
function onCredit() {
    let credit = document.querySelector(".credit-details");
    if (!isCreditOn) {
        credit.style = "display: block";
        isCreditOn = true;
        console.log("display block");
    } else {
        credit.style = "display: none";
        isCreditOn = false;
    }
}