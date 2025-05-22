 const track = document.getElementById("slideTrack");
  let pos = 0;
  const speed = 0.5;
  let halfWidth;
  function init() {
    halfWidth = track.scrollWidth / 2;
    pos = 0;
  }
  function animate() {
    pos -= speed;
    if (pos <= -halfWidth) {
      pos += halfWidth;
    }
    track.style.transform = `translate3d(${pos}px, 0, 0)`;
    requestAnimationFrame(animate);
  }
  window.addEventListener("load", () => {
    init();
    animate();
  });