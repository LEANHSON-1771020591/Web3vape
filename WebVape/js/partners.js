document.addEventListener("DOMContentLoaded", function () {
    const partners = document.querySelectorAll(".partner");
    partners.forEach(partner => {
        const img = partner.querySelector("img");
        const info = partner.querySelector(".infomation");
        partner.addEventListener("mouseenter", () => {
            img.style.transform = "translateY(-30px)";
            img.style.opacity = "0";
            info.classList.add("show");
        });
        partner.addEventListener("mouseleave", () => {
            img.style.transform = "translateY(0)";
            img.style.opacity = "1";
            info.classList.remove("show");
        });
    });
});
