VANTA.CLOUDS({
  el: "#clouds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 400,
  minWidth: 100,
  speed: 1.9,
});

const bar = document.getElementsByClassName("bar")[0];

document.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;
  const scrollMax = window.screen.availHeight;

  let total = Math.floor((scrollY / scrollMax) * 100);
  if (total > 100) {
    total = 100;
  }

  bar.style.height = total + "%";
});
