// Header
const header = document.querySelector('.header');
const hambMenuBtn = document.querySelector('#hamb-menu-btn');
const topBar = document.querySelector('#top-bar');
const middleBar = document.querySelector('#middle-bar');
const bottomBar = document.querySelector('#bottom-bar');
const navbarBg = document.querySelector('#navbar-bg');
const navbar = document.querySelector('#navbar');
const navlinks = document.querySelectorAll('.navlink');
const cartBtn = document.querySelector('#cart-btn');
const cartQuantity = document.querySelector('#cart-quantity');

// Main
const main = document.querySelector('.main');
const cartContentContainer = document.querySelector('#cart-content-container');
const cartContent = document.querySelector('#cart-content');
// const quantityDetail = document.querySelector('#quantity-detail');
// const totalToPay = document.querySelector('#total-to-pay');
const slider = document.querySelector('#slider');
const previousBtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');
const minusBtn = document.querySelector('#minus-btn');
const plusBtn = document.querySelector('#plus-btn');
const counterNumber = document.querySelector('#counter-number');
const addBtn = document.querySelector('#add-btn');

let imagePosition = 0;
let quantityNumber = 0;
let isAdded = false;

// Set main Height with header height
window.addEventListener('load', (e) => {
    const headerHeight = header.clientHeight;
    main.style = `padding-top: calc(${headerHeight}px);`;
    if (window.innerWidth >= 1024) {
        main.style = `padding-top: calc(${headerHeight}px + 2rem);`;
    }
});

// Hamburguer menu functionality
hambMenuBtn.addEventListener('click', () => {
    topBar.classList.toggle('top-bar-x');
    middleBar.classList.toggle('middle-bar-x');
    bottomBar.classList.toggle('bottom-bar-x');
    navbarBg.classList.toggle('hid-navbar');
    navbar.classList.toggle('hid-navbar');
});

// Hid navbar when click navlinks
navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        topBar.classList.remove('top-bar-x');
        middleBar.classList.remove('middle-bar-x');
        bottomBar.classList.remove('bottom-bar-x');
        if ([...navbarBg.classList].includes('hid-navbar') === false) {
            navbarBg.classList.add('hid-navbar');
            navbar.classList.add('hid-navbar');
        }
    });
});

// Show Cart Content
cartBtn.addEventListener('click', () => {
    cartQuantity.classList.toggle('hid-cart-quantity');
    cartContentContainer.classList.toggle('hid-cart-content-container');
});

// Image Slider
previousBtn.disabled = true;
previousBtn.style.background = '#aaa';

previousBtn.addEventListener('click', () => {
    imagePosition--;
    previousBtn.disabled = false;
    previousBtn.style.background = '';
    nextBtn.disabled = false;
    nextBtn.style.background = '';
    slider.style.transform = `translateX(-${imagePosition * 100}%)`;
    if (imagePosition <= 0) {
        previousBtn.disabled = true;
        previousBtn.style.background = '#aaa';
        imagePosition = 0;
        return;
    }
});

nextBtn.addEventListener('click', () => {
    imagePosition++;
    previousBtn.disabled = false;
    previousBtn.style.background = '';
    nextBtn.disabled = false;
    nextBtn.style.background = '';
    slider.style.transform = `translateX(-${imagePosition * 100}%)`;
    if (imagePosition >= 3) {
        nextBtn.disabled = true;
        nextBtn.style.background = '#aaa';
        imagePosition = 3;
        return;
    }
});

// Counter
const addToCart = () => {
    cartContent.innerHTML = `
        <div class="product-details">
            <img src="assets/images/image-product-1-thumbnail.jpg" alt="Product image 1 thumbnail" class="product-details-img">
            <div class="product-details-info">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125 x <span id="quantity-detail">0</span> <span id="total-to-pay" class="total-to-pay">$00.00</span></p>
            </div>
            <button type="button" id="delete-item-btn" class="delete-item-btn">
                <img src="assets/images/icon-delete.svg" alt="Delete icon" class="delete-icon">
            </button>
        </div>
        <button type="button" class="checkout-btn">Checkout</button>`;
    cartContent.style = 'padding-top: 2rem; padding-bottom: 2rem;';
    const quantityDetail = document.querySelector('#quantity-detail');
    const totalToPay = document.querySelector('#total-to-pay');
    const deleteItemBtn = document.querySelector('#delete-item-btn');
    cartQuantity.textContent = quantityNumber;
    quantityDetail.textContent = quantityNumber;
    totalToPay.textContent = `$${quantityNumber*125}.00`;
    deleteItemBtn.addEventListener('click', () => {
        quantityNumber = 0;
        counterNumber.textContent = quantityNumber;
        cartQuantity.textContent = quantityNumber;
        quantityDetail.textContent = quantityNumber;
        totalToPay.textContent = `$${quantityNumber*125}.00`;
        cartContent.innerHTML = `
        <p class="font-medium text-DarkGrayishBlue">Your cart is empty.</p>`;
        cartContent.style = 'padding-top: 6rem; padding-bottom: 6rem;';
        isAdded = false;
    });
}

minusBtn.addEventListener('click', () => {
    quantityNumber--;
    if (quantityNumber <=0) {
        quantityNumber = 0;
        counterNumber.textContent = quantityNumber;
        cartQuantity.textContent = quantityNumber;
        cartContent.innerHTML = `
        <p class="font-medium text-DarkGrayishBlue">Your cart is empty.</p>`;
        cartContent.style = 'padding-top: 6rem; padding-bottom: 6rem;';
    } else if (quantityNumber > 0) {
        counterNumber.textContent = quantityNumber;
        if (isAdded) {
            addToCart();
        }
    }
});

plusBtn.addEventListener('click', () => {
    quantityNumber++;
    if (quantityNumber > 0) {
        counterNumber.textContent = quantityNumber;
        if (isAdded) {
            addToCart();
        }
    }
});

addBtn.addEventListener('click', () => {
    addToCart();
    isAdded = true;
});