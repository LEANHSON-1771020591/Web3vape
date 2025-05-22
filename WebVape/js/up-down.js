document.addEventListener("DOMContentLoaded", function () {
    const upRound = document.getElementById("up-round");
    const downRound = document.getElementById("down-round");
    const hiddenContent = document.querySelector(".hidden-content");
    const roundOne = document.getElementById("round-one");
    const roundTwo = document.getElementById("round-two");
    const roundThree = document.getElementById("round-three");

    upRound.style.display = "none";
    downRound.style.display = "none";
    hiddenContent.style.display = "block";

    roundOne.addEventListener("mouseenter", () => {
        if (upRound.style.display !== "none") {
            upRound.style.display = "inline-block";
        } else if (downRound.style.display !== "none") {
            downRound.style.display = "inline-block";
        } else {
            upRound.style.display = "inline-block";
        }
    });

    roundOne.addEventListener("mouseleave", () => {
        upRound.style.display = "none";
        downRound.style.display = "none";
    });

    upRound.addEventListener("click", () => {
        upRound.style.display = "none";
        downRound.style.display = "inline-block";
        hiddenContent.style.display = "none";

        roundTwo.style.top = "20%";
        roundThree.style.top = "35%";
    });

    downRound.addEventListener("click", () => {
        downRound.style.display = "none";
        upRound.style.display = "inline-block";
        hiddenContent.style.display = "block";

        roundTwo.style.top = "70%";
        roundThree.style.top = "85%";
    });
});
