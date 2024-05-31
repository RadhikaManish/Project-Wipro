let cartTotal = 0;

function increment(quantityId, totalId, price) {
    const quantityElement = document.getElementById(quantityId);
    const totalElement = document.getElementById(totalId);
    let quantity = parseInt(quantityElement.value);
    quantity += 1;
    quantityElement.value = quantity;
    totalElement.innerText = `Total: ${quantity * price}/-`;
}

function decrement(quantityId, totalId, price) {
    const quantityElement = document.getElementById(quantityId);
    const totalElement = document.getElementById(totalId);
    let quantity = parseInt(quantityElement.value);
    if (quantity > 1) {
        quantity -= 1;
        quantityElement.value = quantity;
        totalElement.innerText = `Total: ${quantity * price}/-`;
    }
}

function addToCart(parentId, totalId) {
    const totalElement = document.getElementById(totalId);
    const totalText = totalElement.innerText;
    const totalValue = parseInt(totalText.split(' ')[1].replace('/-', ''));
    cartTotal += totalValue;
    document.getElementById('total-amount').innerText = cartTotal;
}

function removeFromCart(parentId, totalId) {
    const totalElement = document.getElementById(totalId);
    const totalText = totalElement.innerText;
    const totalValue = parseInt(totalText.split(' ')[1].replace('/-', ''));
    cartTotal -= totalValue;
    document.getElementById('total-amount').innerText = cartTotal;
}

function updateTotalAmount() {
    const couponElement = document.getElementById('total-coupon');
    const totalAmountElement = document.getElementById('total-amount');
    const couponCode = couponElement.value;
    let totalValue = parseInt(totalAmountElement.innerText);
    if (couponCode === 'DISCOUNT50') {
        totalValue *= 0.5;
    } else if (couponCode === 'DISCOUNT10') {
        totalValue *= 0.9;
    }
    totalAmountElement.innerText = totalValue.toFixed(2);
}
const search = () =>{
    const searchbox = document.getElementById("search-items").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product=document.querySelectorAll(".product-box");
    const pname = document.getElementsByTagName("h1");

    for(var i=0;i < pname.length; i++)
        {
            let match = product[i].getElementsByTagName('h1')[0];

            if(match){
              let textvalue = match.textContent || match.innerHTML
              if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
              }
              else{
                product[i].style.display = "none";
              }

            }
        }
}
