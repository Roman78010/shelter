const burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.menu'),
    overlay = document.querySelector('.menu__overlay');

const burgerToggle = burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
});



$(document).ready(function(){
    $('.friends__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2V4H3V6L0 3L3 0V2H14Z" fill="#292929"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4V2L11 2V0L14 3L11 6V4L0 4Z" fill="#292929"/></svg></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    // variableWidth: true,
                    slidesToShow: 2,
                    // dots: true,
                    // arrows: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    // dots: true
                }
            }
        ]
    });
  });



let about = document.getElementById('about'),
      aboutButton = document.querySelector('.header__list-link--about'),
      friends = document.getElementById('friends'),
      friendsButton = document.querySelector('.header__list-link--friends'),
      help = document.getElementById('help'),
      helpButton = document.querySelector('.header__list-link--help'),
      footer = document.getElementById('footer'),
      footerButton = document.querySelector('.header__list-link--footer');

// function handleButtonClick(e) {
//     e.preventDefault();
//     about.scrollIntoView({block: 'start', behavior: 'smooth'});
//     // menu.classList.toggle('active');
//     // burger.classList.toggle('active');
// }

// aboutButton.addEventListener('click', handleButtonClick);





// aboutButton.addEventListener('click', (e) => {
//     // e.preventDefault();
//     about.scrollIntoView({block: 'start', behavior: 'smooth'});
//     // menu.classList.toggle('active');
//     // burger.classList.toggle('active');
// });


// function handleButtonClick(e) {
    //     e.preventDefault();
    // friends.scrollIntoView({block: 'start', behavior: 'smooth'});
// }

// friendsButton.addEventListener('click', handleButtonClick);



// function handleButtonClick(e) {
//     e.preventDefault();
//     help.scrollIntoView({block: 'start', behavior: 'smooth'});
// }

// helpButton.addEventListener('click', handleButtonClick);



function handleButtonClick(e) {
    e.preventDefault();
    footer.scrollIntoView({block: 'start', behavior: 'smooth'});
}

footerButton.addEventListener('click', handleButtonClick);
