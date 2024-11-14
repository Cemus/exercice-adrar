async function getPokemons() {
  const url = "https://pokebuildapi.fr/api/v1/pokemon";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function displayPokemons() {
  const pokemons = await getPokemons();
  const body = document.body;
  const loading = document.querySelector(".loading");
  body.removeChild(loading);

  console.log(pokemons);
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    const div = document.createElement("div");
    div.style.cursor = "pointer";
    div.addEventListener("click", () => {
      openMenu(pokemons[i]);
    });
    const img = document.createElement("img");
    img.src = pokemon.image;
    img.alt = pokemon.name;
    img.loading = "lazy";
    const p = document.createElement("p");
    p.textContent = pokemon.name;
    div.append(img);
    div.append(p);
    body.append(div);
  }
}

function openMenu(pokemon) {
  const dialog = document.querySelector("dialog");
  if (!dialog.open) {
    dialog.showModal();
    dialog.open = true;
  } else {
    dialog.close();
    dialog.open = false;
  }
  console.log(pokemon);
  const type = createType(pokemon.apiTypes);
  dialog.children[0].textContent = createType(pokemon.apiTypes);
}

function createType(typeArray) {
  const nameArray = [];

  typeArray.forEach((element) => {
    console.log(element);
    nameArray.push(element.name);
  });

  const result = nameArray.join("/");
  return `Type : ${result}`;
}

displayPokemons();
