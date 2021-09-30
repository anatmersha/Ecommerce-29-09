const tops = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].Category == "top") {
        tops.push(products[i]);
    }
}

var topsCategory = document.getElementById('topsCategory');

const itemsDisplay = (tops) => {
    let show = "";
    for (let i = 0; i < tops.length; i++) {
        show += `
    <article class="top">
    <h3>${tops[i].Name}</h3>
    <button class="preBtn" type="button"><a>&#10094;</a></button>
    <img class="topImg" src="${tops[i].Images[0]}">
    <button class="nextBtn" type="button"><a>&#10095;</a></button>
    <h5>${tops[i].Description}</h5>
    <p class="topsPrice">${tops[i].Price} $</p>
    <span onclick="QVDisplay()" class="quickViewBtn">Quick View</span>
    </article>;`

    }
    topsCategory.innerHTML = show;
};
itemsDisplay(tops);

var preBtn = document.getElementsByClassName('preBtn');
var nextBtn = document.getElementsByClassName('nextBtn');
var topImg = document.getElementsByClassName('topImg');

function next() {
    for (let i = 0; i < nextBtn.length; i++) {
        let counter = 0;
        nextBtn[i].addEventListener("click", () => {
            switch (counter) {
                case 0:
                    topImg[i].src = tops[i].Images[1]
                    counter = 1
                    break;
                case 1:
                    topImg[i].src = tops[i].Images[0]
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
                    topImg[i].src = tops[i].Images[1]
                    counter = 1
                    break;
                case 1:
                    topImg[i].src = tops[i].Images[0]
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
        tops.sort(function(a, b) {
            return a.Price - b.Price;
        });
        itemsDisplay(tops);
        next();
        pre();
    } else if (sortList.value == "High to low") {
        tops.sort(function(a, b) {
            return b.Price - a.Price;
        });
        itemsDisplay(tops);
        next();
        pre();
    }
})


var topsPrice = document.getElementsByClassName('topsPrice');
for (let i = 0; i < tops.length; i++) {
    if (tops[i].isSale == true) {
        var PercentOff = Math.round(tops[i].Price * 0.7);
        topsPrice[i].innerHTML = `<del>${tops[i].Price} $</del> <b>${PercentOff}$</b>`;
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
                <img class="QVImg1" src="${tops[i].Images[0]}">
                <img class="QVImg2" src="${tops[i].Images[1]}">
                <h3>About me</h3>
                <p> Main Material: Cotton.<br> Lorem, ipsum dolor sit amet consectetur neque.<br> Minus vel sunt asperiores doloremque perspiciatis<br> voluptatibus enim, explicabo dolorum ab.</p>              
                <h3 id="sizeInfo">Size&Fit</h3>
                <p id="sizeInfoP">Model's size: UK8 / EU36 / US4.<br> Model's height: 170 cm / 5'7.</p>
            </article>
            <article class="rightQuickView">
            <span onclick="exitQV()" class="exit">&times;</span>
                <h1>${tops[i].Name}</h1>
                <h3>${tops[i].Description}</h3>
                <h4 class="QVPrice">${tops[i].Price} $</h4>
                <button class="pushToCart" type="button" onclick="addToCart(${i})">Add to cart</button>
                <div id="deliveryInfo">Free Delivery !<br>Free Returns !</div>                    
            </article>
        </section>
        </section>
            `
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
    cartList.push(tops[x]);
    console.log(cartList);
}