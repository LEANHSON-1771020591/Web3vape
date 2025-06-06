document.addEventListener("DOMContentLoaded", () => {
  const walletBtn = document.getElementById("connect");
  const navRightLink = document.querySelector(".nav-right a");
  const popup = document.getElementById("walletPopup");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  function openPopup() {
    popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  function closePopup() {
    popup.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  walletBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup();
  });

  navRightLink.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup();
  });

  closeBtn.addEventListener("click", closePopup);

  overlay.addEventListener("click", closePopup);
});
