const cartList = [{
        Id: "dresses21",
        Name: "THE INFLUENTIAL MIDI",
        Price: 340,
        Description: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Quisquam veritatis",
        isSale: true,
        Category: "dresses",
        Images: [
            "../IMAGES/DRESSES/41.jpg",
            "../IMAGES/DRESSES/42.jpg"
        ]
    },
    {
        Id: "dresses22",
        Name: "90S RIBBED TANK DRESS",
        Price: 200,
        Description: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Quisquam veritatis",
        isSale: false,
        Category: "dresses",
        Images: [
            "../IMAGES/DRESSES/43.jpg",
            "../IMAGES/DRESSES/44.jpg"
        ]
    },
    {
        Id: "dresses23",
        Name: "90S RIBBED TANK DRESS WHITE",
        Price: 200,
        Description: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Quisquam veritatis",
        isSale: false,
        Category: "dresses",
        Images: [
            "../IMAGES/DRESSES/45.jpg",
            "../IMAGES/DRESSES/46.jpg"
        ]
    },
    {
        Id: "dresses24",
        Name: "ASYMMETRICAL DRESS",
        Price: 390,
        Description: "Lorem ipsum dolor sit amet consectetur<br>adipisicing elit. Quisquam veritatis",
        isSale: false,
        Category: "dresses",
        Images: [
            "../IMAGES/DRESSES/47.jpg",
            "../IMAGES/DRESSES/48.jpg"
        ]
    },
];

var cart = document.getElementById('cart');
var cartTable = document.getElementsByClassName('cartTable');
var quantity = document.getElementsByClassName('quantity');
var total = document.getElementsByClassName('total');
var remove = document.getElementsByClassName('remove');
var cartTotal = document.getElementById('cartTotal');
var subTotal = document.getElementById('subTotal');
var couponInput = document.getElementsByClassName('couponInput');
var couponButton = document.getElementsByClassName('couponButton');
var discount = document.getElementById('discount');
var discountAmount = document.getElementById('discountAmount');


var emptyCartSection = document.getElementById('emptyCartSection');
var cartIcon = document.getElementById('cartIcon');
var emptyCartLink = document.getElementById('emptyCartLink');
var emptyCartHeader = document.getElementById('emptyCartHeader');

const cartItemsDisplay = (cartList) => {
    let display = "";
    for (var i = 0; i < cartList.length; i++) {
        display += `
        <table id="${cartList[i].Id}" class="cartTable">
        <tr> 
    <th rowspan="4"><img class="cartImg" src="${cartList[i].Images[0]}"></th>    
    <td class="cartPrice">${cartList[i].Price} $</td>
    <td class="remove" onclick="removeItem(${i})">&times;</td>
    </tr>

    <tr>
    <td><h1 class="cartName">${cartList[i].Name}</h1></td>
    </tr>

    <tr>
    <td class="cartDesc">${cartList[i].Description}</td>  
    </tr>

    <tr>
    <td><input min="1" max="20" placeholder="Qty" class="quantity" oninput="getValue(${i})" type="number"  value="1">
    <p class="total"></p></td>
    </tr>
    </table>
`
    }
    cart.innerHTML = display
}
cartItemsDisplay(cartList);

function coupon20P() {
    var z = 0;
    for (var i = 0; i < cartList.length; i++) {
        if ((quantity[i].value) >= 1) {
            if (typeof(quantity[i].value) != typeof(3)) {
                var x = Number(quantity[i].value);
                var y = Number(cartList[i].Price);
                totalAmount = Number(x * y);
                total[i].innerHTML = totalAmount;
                z += totalAmount;
                subTotal.innerHTML = `<del>${Number(z)}$</del>`;
                discount.innerHTML = "20% OFF!";
                discountAmount.innerHTML = `${Number(z) * 0.9}$`;
            }
        } else if ((cartList.length) == 1) {
            subTotal.innerHTML = 0;
        }
    }
}

function isCoupon() {
    if (couponInput.value = "#UhaveAVgood(I)") {
        coupon20P()
    }
}

function getValue() {
    var z = 0;
    for (var i = 0; i < cartList.length; i++) {
        if ((quantity[i].value) >= 1) {
            if (typeof(quantity[i].value) != typeof(3)) {
                var x = Number(quantity[i].value);
                var y = Number(cartList[i].Price);
                totalAmount = Number(x * y);
                total[i].innerHTML = totalAmount;
                z += totalAmount;
                subTotal.innerHTML = Number(z);
            }
        } else if ((cartList.length) == 1) {
            subTotal.innerHTML = 0;
        }
    }
}
getValue()

for (let i = 0; i < cartList.length; i++) {
    function removeItem(x) {
        cartList.splice(x, 1);
        getValue()
        cartItemsDisplay(cartList);
        console.log(cartList);
    }
}
for (let i = 0; i < cartList.length; i++) {
    if (cartList.length == 0) {
        emptyCartSection.style.display = "flex";
    }
}