function initMap() {
    let element = document.getElementById('map');
    let options = {
        zoom: 17,
        center: {lat: 59.938635, lng: 30.323118}
    };
    let myMap = new google.maps.Map(element, options);

    addMarker({lat: 59.938635, lng: 30.323118});

    function addMarker(coordinates) {
        let marker = new google.maps.Marker({
            position: coordinates,
            map: myMap,
            icon: 'https://belozerovsemen.github.io/mishka/img/map-pin.png'
        });
    }
}

//меню
'use strict';

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});


//модалка в каталоге

let catalogList = document.querySelector(".catalog__list");
if (catalogList) {
    let catalogBuyInform = function() {
        let elements = catalogList.querySelectorAll(".catalog__item");
        let cartModal = document.querySelector(".popup-fade");

        if (cartModal) {
            let closeCartModal = document.querySelector(".buy-modal__button");

            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                let child = element.querySelector(".catalog__link--cart");

                child.addEventListener("click", function(evt) {
                    evt.preventDefault();
                    cartModal.classList.add("modal-show");
                });
            }

            closeCartModal.addEventListener("click", function(evt) {
                evt.preventDefault();
                cartModal.classList.remove("modal-show");
            });

            window.addEventListener("keydown", function(evt) {
                if (evt.keyCode === 27) {
                    evt.preventDefault();
                    cartModal.classList.remove("modal-show");
                }
            });
        }
    };
    catalogBuyInform();
}

//модалка на главной

let buyButton = document.querySelector(".product__order");
let modal = document.querySelector(".popup-fade");
let modalClose = document.querySelector(".buy-modal__button");

buyButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
});
modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal-show")) {
            modal.classList.remove("modal-show");
        }
    }
});
