/** Variables*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer =document.querySelector('.cards-container');

/** constructor */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon .addEventListener('click', toggleCarritoAside);

/** Functions */
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
  
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
     }
    mobileMenu.classList.toggle('inactive');

}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
 if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');    
 }
 desktopMenu.classList.add('inactive');
 aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
name: 'Bike',
price: 120,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
name: 'Iphone',
price: 1200,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
name: 'Tv',
price: 720,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr){

    for (product of arr){
        const productCard = document.createElement('div');
        const productImg = document.createElement('img');
        productCard.classList.add('product-card');
        productImg.setAttribute('src',product.imagen);
        ////////
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        const productInfoName = document.createElement('p');
        productInfo.classList.add('product-info');
        productInfoPrice.innerText = '$ ' + product.price;
        productInfoName.innerText = product.name;
        ///////
        const productInfoFigure=document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        //////
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);