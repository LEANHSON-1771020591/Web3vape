document.addEventListener("DOMContentLoaded", function () {
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const quantityDisplay = document.getElementById("product-buy");
    const totalDisplay = document.getElementById("number-buy");

    let amount = 1;
    const min = 1;
    const max = 3;
    const unitPrice = 0.1;

    function updateDisplay() {
        quantityDisplay.textContent = amount;
        const total = Number((amount * unitPrice).toFixed(3)); // chính xác và gọn
        totalDisplay.textContent = `${total} ETH`;
    }

    function updateCursorState() {
        increaseBtn.style.cursor = (amount >= max) ? "not-allowed" : "pointer";
        decreaseBtn.style.cursor = (amount <= min) ? "not-allowed" : "pointer";
    }

    updateDisplay();
    updateCursorState();

    increaseBtn.addEventListener("click", () => {
        if (amount < max) {
            amount++;
            updateDisplay();
        }
        updateCursorState();
    });

    decreaseBtn.addEventListener("click", () => {
        if (amount > min) {
            amount--;
            updateDisplay();
        }
        updateCursorState();
    });
});
