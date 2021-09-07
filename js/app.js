// price text
const bestPrice = document.getElementById("best-price");
const extraMemory = document.getElementById("extra-memory");
const extraStorage = document.getElementById("extra-storage");
const deliveryCharge = document.getElementById("delivery-charge");
const totalPrice = document.getElementById("total-price");
const totalPriceWithPromo = document.getElementById("total-price-promo");

// all  functions
function changeTotalValue(amount, textValue) {
  textValue.innerText = amount;
  getTotalPrice();
}

// find total price

function getTotalPrice() {
  const total =
    parseFloat(bestPrice.innerText) +
    parseFloat(extraMemory.innerText) +
    parseFloat(extraStorage.innerText) +
    parseFloat(deliveryCharge.innerText);
  totalPrice.innerText = total;
  totalPriceWithPromo.innerText = total;
}

// add event listeners

// memory 8 gb
document
  .getElementById("memory-8gb-btn")
  .addEventListener("click", function () {
    changeTotalValue(0, extraMemory);
  });

// memory 16 gb
document
  .getElementById("memory-16gb-btn")
  .addEventListener("click", function () {
    changeTotalValue(180, extraMemory);
  });

//  storage 256
document
  .getElementById("storage-256gb-btn")
  .addEventListener("click", function () {
    changeTotalValue(0, extraStorage);
  });

//  storage 512gb
document
  .getElementById("storage-512gb-btn")
  .addEventListener("click", function () {
    changeTotalValue(100, extraStorage);
  });

//  storage 1tb
document
  .getElementById("storage-1tb-btn")
  .addEventListener("click", function () {
    changeTotalValue(180, extraStorage);
  });

//  delivery charge free
document.getElementById("delivery-free").addEventListener("click", function () {
  changeTotalValue(0, deliveryCharge);
});

//  delivery charge 20$
document
  .getElementById("delivery-20usd")
  .addEventListener("click", function () {
    changeTotalValue(20, deliveryCharge);
  });

//   promotion code
document.getElementById("promo-btn").addEventListener("click", function () {
  const promoInput = document.getElementById("promo-input");
  const errorCheck = document.getElementById("error-check");
  if (promoInput.value == "stevekaku") {
    const percentage20 = (totalPrice.innerText / 100) * 20;
    totalPriceWithPromo.innerText = totalPrice.innerText - percentage20;
    promoInput.style.borderColor = "black";
    errorCheck.style.display = "none";
  } else {
    // error handling
    promoInput.style.borderColor = "red";
    errorCheck.style.display = "block";
  }
  promoInput.value = "";
});
