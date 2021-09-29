const shoes = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].Category == "shoes") {
        shoes.push(products[i]);
    }
}

var shoesCategory = document.getElementById('shoesCategory');

const itemsDisplay = (shoes) => {
    let show = "";
    for (let i = 0; i < shoes.length; i++) {
        show += `
    <article class="shoe">
    <h3>${shoes[i].Name}</h3>
    <button class="preBtn" type="button"><a>&#10094;</a></button>
    <img class="shoeImg" src="${shoes[i].Images[0]}">
    <button class="nextBtn" type="button"><a>&#10095;</a></button>
    <h5>${shoes[i].Description}</h5>
    <p class="shoePrice">${shoes[i].Price} $</p>
    <span onclick="QVDisplay()" class="quickViewBtn">Quick View</span>
    </article>;`

    }
    shoesCategory.innerHTML = show;
};

itemsDisplay(shoes);

var preBtn = document.getElementsByClassName('preBtn');
var nextBtn = document.getElementsByClassName('nextBtn');
var shoeImg = document.getElementsByClassName('shoeImg');

function next() {
    for (let i = 0; i < nextBtn.length; i++) {
        let counter = 0;
        nextBtn[i].addEventListener("click", () => {
            switch (counter) {
                case 0:
                    shoeImg[i].src = shoes[i].Images[1]
                    counter = 1
                    break;
                case 1:
                    shoeImg[i].src = shoes[i].Images[0]
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
                    shoeImg[i].src = shoes[i].Images[1]
                    counter = 1
                    break;
                case 1:
                    shoeImg[i].src = shoes[i].Images[0]
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
        shoes.sort(function(a, b) {
            return a.Price - b.Price;
        });
        itemsDisplay(shoes);
        next();
        pre();
    } else if (sortList.value == "High to low") {
        shoes.sort(function(a, b) {
            return b.Price - a.Price;
        });
        itemsDisplay(shoes);
        next();
        pre();
    }
})


var shoePrice = document.getElementsByClassName('shoePrice');
for (let i = 0; i < shoes.length; i++) {
    if (shoes[i].isSale == true) {
        var PercentOff = Math.round(shoes[i].Price * 0.7);
        shoePrice[i].innerHTML = `<del>${shoes[i].Price} $</del> <b>${PercentOff}$</b>`;

    }
}

var quickView = document.getElementsByClassName('quickView');
var quickViewBtn = document.getElementsByClassName('quickViewBtn');
var exit = document.getElementsByClassName('exit');
var quickViewContent = document.getElementsByClassName('quickViewContent');
var quickViewSection = document.getElementById('quickViewSection');


function QVDisplay() {
    for (let i = 0; i < quickViewBtn.length; i++) {
        quickViewBtn[i].addEventListener("click", () => {
            quickViewSection.innerHTML += `
        <section class="quickView">
        <section class="quickViewContent">

            <article class="leftQuickView">
                <img class="QVImg1" src="${shoes[i].Images[0]}">
                <img class="QVImg2" src="${shoes[i].Images[1]}">
                <h3>About me</h3>
                <p> Main Material: Cotton.<br> Lorem, ipsum dolor sit amet consectetur neque.<br> Minus vel sunt asperiores doloremque perspiciatis<br> voluptatibus enim, explicabo dolorum ab.</p>
                
                <h3 id="sizeInfo">Size&Fit</h3>
                <p id="sizeInfoP">Model's size: UK8 / EU36 / US4.<br> Model's height: 170 cm / 5'7.</p>
            </article>

            <article class="rightQuickView">
            <span onclick="exitQV()" class="exit">&times;</span>
                <h1>${shoes[i].Name}</h1>
                <h3>${shoes[i].Description}</h3>
                <h4 class="QVPrice">${shoes[i].Price} $</h4>
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
    cartList.push(shoes[x]);
}