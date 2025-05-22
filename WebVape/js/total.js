document.addEventListener("DOMContentLoaded", function () {
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const amountSpan = document.getElementById("amount");
    const totalDisplay = document.getElementById("total");
    let amount = 1;
    const min = 1;
    const max = 3;
    const unitPrice = 0.1;
    function updateTotal() {
        const total = (amount * unitPrice).toFixed(1);
        totalDisplay.textContent = `${total} ETH`;
    }

    function updateCursorState() {
        increaseBtn.style.cursor = (amount >= max) ? "not-allowed" : "pointer";
        decreaseBtn.style.cursor = (amount <= min) ? "not-allowed" : "pointer";
    }
    amountSpan.textContent = amount;
    updateTotal();
    updateCursorState();
    increaseBtn.addEventListener("click", () => {
        if (amount < max) {
            amount++;
            amountSpan.textContent = amount;
            updateTotal();
        }
        updateCursorState();
    });
    decreaseBtn.addEventListener("click", () => {
        if (amount > min) {
            amount--;
            amountSpan.textContent = amount;
            updateTotal();
        }
        updateCursorState();
    });
});
