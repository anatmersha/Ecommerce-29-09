const dresses = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].Category == "dresses") {
        dresses.push(products[i]);
    }
}

var dressesCategory = document.getElementById('dressesCategory');

const itemsDisplay = (dresses) => {
    let show = "";
    for (let i = 0; i < dresses.length; i++) {
        show += `
    <article class="dress">
    <h3>${dresses[i].Name}</h3>
    <button class="preBtn" type="button"><a>&#10094;</a></button>
    <img class="dressImg" src="${dresses[i].Images[0]}">
    <button class="nextBtn" type="button"><a>&#10095;</a></button>
    <h5>${dresses[i].Description}</h5>
    <p class="dressPrice">${dresses[i].Price} $</p>
    <span onclick="QVDisplay()" class="quickViewBtn">Quick View</span>
    </article>;`

    }
    dressesCategory.innerHTML = show;
};
itemsDisplay(dresses);

var preBtn = document.getElementsByClassName('preBtn');
var nextBtn = document.getElementsByClassName('nextBtn');
var dressImg = document.getElementsByClassName('dressImg');

function next() {
    for (let i = 0; i < nextBtn.length; i++) {
        let counter = 0;
        nextBtn[i].addEventListener("click", () => {
            switch (counter) {
                case 0:
                    dressImg[i].src = dresses[i].Images[1]
                    counter = 1
                    break;
                case 1:
                    dressImg[i].src = dresses[i].Images[0]
                    counter = 0
                    break;
            }
        });
    }
}
next()

function pre() {
    for (let i = 0; i < preBtn.length; i++) {
        let counter = 0;
        preBtn[i].addEventListener("click", () => {
            switch (counter) {
                case 0:
                    dressImg[i].src = dresses[i].Images[1]
                    counter = 1
                    break;
                case 1:
                    dressImg[i].src = dresses[i].Images[0]
                    counter = 0
                    break;
            }
        });
    }
}
pre()


var sortList = document.getElementById('sortList');
sortList.addEventListener("change", function() {
    if (sortList.value == "Low to high") {
        dresses.sort(function(a, b) {
            return a.Price - b.Price;
        });
        itemsDisplay(dresses);
        next();
        pre();
    } else if (sortList.value == "High to low") {
        dresses.sort(function(a, b) {
            return b.Price - a.Price;
        });
        itemsDisplay(dresses);
        next();
        pre();
    }
})


var dressPrice = document.getElementsByClassName('dressPrice');
for (let i = 0; i < dresses.length; i++) {
    if (dresses[i].isSale == true) {
        var PercentOff = Math.round(dresses[i].Price * 0.7);
        dressPrice[i].innerHTML = `<del>${dresses[i].Price} $</del> <b>${PercentOff}$</b>`;

    }
}

var quickView = document.getElementsByClassName('quickView');
var quickViewBtn = document.getElementsByClassName('quickViewBtn');
var exit = document.getElementsByClassName('exit');
var quickViewContent = document.getElementsByClassName('quickViewContent');
var quickViewSection = document.getElementById('quickViewSection');
var QVPrice = document.getElementsByClassName('QVPrice');


function QVDisplay() {
    for (let i = 0; i < quickViewBtn.length; i++) {
        quickViewBtn[i].addEventListener("click", () => {
            quickViewSection.innerHTML += `
        <section class="quickView">
        <section class="quickViewContent">
            <article class="leftQuickView">
                <img class="QVImg1" src="${dresses[i].Images[0]}">
                <img class="QVImg2" src="${dresses[i].Images[1]}">
                <h3>About me</h3>
                <p> Main Material: Cotton.<br> Lorem, ipsum dolor sit amet consectetur neque.<br> Minus vel sunt asperiores doloremque perspiciatis<br> voluptatibus enim, explicabo dolorum ab.</p>                
                <h3 id="sizeInfo">Size&Fit</h3>
                <p id="sizeInfoP">Model's size: UK8 / EU36 / US4.<br> Model's height: 170 cm / 5'7.</p>
            </article>
            <article class="rightQuickView">
            <span onclick="exitQV()" class="exit">&times;</span>
                <h1>${dresses[i].Name}</h1>
                <h3>${dresses[i].Description}</h3>
                <h4 class="QVPrice">${dresses[i].Price} $</h4>
                <button class="pushToCart" type="button" onclick="addToCart(${i})">Add to cart</button>
                <div id="deliveryInfo">Free Delivery !<br>Free Returns !</div>                    
            </article>
        </section>
        </section>
            ;`
        })
    }
}

var pushToCart = document.getElementsByClassName('pushToCart');


function exitQV() {
    for (let i = 0; i < exit.length; i++) {
        quickView[i].style.display = "none";
    }
}

function addToCart(x) {
    cartList.push(dresses[x]);
    console.log(cartList);
}