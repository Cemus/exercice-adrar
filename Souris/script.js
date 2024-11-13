const imageBank = [
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGRPyy5VrHCI6yjk5JkNxz4K4-_Ih5B-9wVuT_fZ7azD8bQktQAGM589aAHQPSCbcMqFkTM29I08pjYmPwUp1IkAqOVSZaqREXHsDGgkQ",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRd17F8IxphNd7-1S1SlGXy3s-cMBihcorjUkQI5-1i4Bw5npaXV4DamlvtcIOu7UrNhzeOSZ-kinpkw2_SGlKFG47O9byQdY_W1b4IZQ",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Friedrich_Engels_portrait_%28cropped%29.jpg/260px-Friedrich_Engels_portrait_%28cropped%29.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaHREW07MwRgXw3dibyK0WloK-gVxQUmA4Kw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcn1DwEsNNGt4RNkEXLTInHdplbB8cgQdYqQ&s ",
  "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQfPMyOEUOy0p2lzXMVH1D9SFTsiygMh4JMnRqHq4rnFUxMx-YFTCN9pEsis0Wqyf16muMmTQffRggI8Sk",
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
