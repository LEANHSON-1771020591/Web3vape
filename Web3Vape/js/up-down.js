document.addEventListener("DOMContentLoaded", function () {
  const upRound = document.getElementById("up-round");
  const downRound = document.getElementById("down-round");
  const hiddenContent = document.querySelector(".hidden-content");
  const roundOne = document.getElementById("round-one");
  const roundTwo = document.getElementById("round-two");
  const roundThree = document.getElementById("round-three");

  // Ẩn cả 2 icon nhưng giữ layout
  function hideIcons() {
    upRound.style.opacity = "0";
    upRound.style.visibility = "hidden";
    downRound.style.opacity = "0";
    downRound.style.visibility = "hidden";
  }

  // Hiện 1 trong 2 icon tùy trạng thái
  function showProperIcon() {
    if (hiddenContent.style.display === "none") {
      downRound.style.opacity = "1";
      downRound.style.visibility = "visible";
    } else {
      upRound.style.opacity = "1";
      upRound.style.visibility = "visible";
    }
  }

  hideIcons();
  hiddenContent.style.display = "block";

  roundOne.addEventListener("mouseenter", showProperIcon);
  roundOne.addEventListener("mouseleave", hideIcons);

  upRound.addEventListener("click", () => {
    hiddenContent.style.display = "none";
    hideIcons();
    showProperIcon();
    roundTwo.style.top = "20%";
    roundThree.style.top = "35%";
  });

  downRound.addEventListener("click", () => {
    hiddenContent.style.display = "block";
    hideIcons();
    showProperIcon();

    roundTwo.style.top = "70%";
    roundThree.style.top = "85%";
  });
});
