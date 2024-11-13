const imageBank = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzYHSYFBgdU-RVITnLLIXSbES3Is5vWlq5Fw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttZ1dQav-ujm952ibBKRA2kw_7sKRkujo6A&s",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYVFUOgjGAD8Rc9Fe1EZkt_v2YiySOVbTHw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJ9RVKuLZGlAy9G7oKkyb8TURYam7Q09uqA&s ",
  "https://i.f1g.fr/media/eidos/1200x630_crop/2020/12/22/XVMd15fe736-4466-11eb-b24a-89d459643e2c-805x537.jpg",
];

document.addEventListener("click", (e) => {
  createElement(e.x, e.y);
});

function getImage() {
  const random = Math.floor(Math.random() * imageBank.length);
  return imageBank[random];
}

function createElement(x, y) {
  const image = document.createElement("img");
  image.style.position = "absolute";
  image.style.top = y + "px";
  image.style.left = x + "px";
  image.style.transform = "translate(-50%,-50%)";
  image.style.height = "25%";

  image.src = getImage();

  document.body.append(image);
}
