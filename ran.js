function increment() {
    let Quantity = document.getElementById("Quantity");
    let total = document.getElementById("Total");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity + 1;
    let total2 = 425 * c;
    total.innerHTML = total2;

    // Discount applied
    if (c > 5) {
        total2 = total2 - 500;
        total.innerHTML = total2;
        alert("Coupon of 500 Applied Successfully");
    }
}

function Decrement() {
    let Quantity = document.getElementById("Quantity");
    let total = document.getElementById("Total");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity - 1;
    let total2 = 425 * c;
    total.innerHTML = total2;
}

function cartitems() {
    let parent = document.getElementById("parent");
    let Total = document.createElement("div");
    Total.innerText = "Total: " + document.getElementById("Total").innerHTML;
    parent.appendChild(Total);
    return Total;

}

function update_amount() {
    let upamount = document.getElementById("coupoun").value;
    let total = parseInt(document.getElementById("Total").innerHTML);
    if (upamount == "CODE200") {
        total = total - 200;
    }
    document.getElementById("Total").innerHTML = total;
    console.log(total);
}

// Repeat functions for the second product box
function increment2() {
    let Quantity = document.getElementById("Quantity2");
    let total = document.getElementById("Total2");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity + 1;
    let total2 = 560 * c;
    total.innerHTML = total2;

    // Discount applied
    if (c > 5) {
        total2 = total2 - 500;
        total.innerHTML = total2;
        alert("Coupon of 500 Applied Successfully");
    }
}

function Decrement2() {
    let Quantity = document.getElementById("Quantity2");
    let total = document.getElementById("Total2");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity - 1;
    let total2 = 560 * c;
    total.innerHTML = total2;
}

function cartitems2() {
    let parent = document.getElementById("parent2");
    let Total = document.createElement("div");
    Total.innerText = "Total: " + document.getElementById("Total2").innerHTML;
    parent.appendChild(Total);
}

function update_amount2() {
    let upamount = document.getElementById("coupoun2").value;
    let total = parseInt(document.getElementById("Total2").innerHTML);
    if (upamount == "CODE200") {
        total = total - 200;
    }
    document.getElementById("Total2").innerHTML = total;
    console.log(total);
}

function increment3() {
    let Quantity = document.getElementById("Quantity");
    let total = document.getElementById("Total");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity + 1;
    let total2 = 700 * c;
    total.innerHTML = total2;

    // Discount applied
    if (c > 5) {
        total2 = total2 - 500;
        total.innerHTML = total2;
        alert("Coupon of 500 Applied Successfully");
    }
}

function Decrement3() {
    let Quantity = document.getElementById("Quantity");
    let total = document.getElementById("Total");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity - 1;
    let total2 = 700 * c;
    total.innerHTML = total2;
}


function increment4() {
    let Quantity = document.getElementById("Quantity");
    let total = document.getElementById("Total");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity + 1;
    let total2 = 800 * c;
    total.innerHTML = total2;

    // Discount applied
    if (c > 5) {
        total2 = total2 - 500;
        total.innerHTML = total2;
        alert("Coupon of 500 Applied Successfully");
    }
}

function Decrement4() {
    let Quantity = document.getElementById("Quantity");
    let total = document.getElementById("Total");
    let currentquantity = parseInt(Quantity.value);
    let c = Quantity.value = currentquantity - 1;
    let total2 = 800 * c;
    total.innerHTML = total2;
}


function updateTotalAmount() {
    let totalAmount = parseInt(document.getElementById("total-amount").innerHTML);
    let couponCode = document.getElementById("total-coupon").value;

    if (couponCode === "CODE200") {
        totalAmount -= 200;
    }

    document.getElementById("total-amount").innerHTML = totalAmount;
}
