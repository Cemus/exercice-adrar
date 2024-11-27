async function getData() {
  const url = `https://api.chucknorris.io/jokes/random`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error(error.message);
  }
}

export default async function changeTitle() {
  const title = document.getElementsByTagName("h1")[0];
  const punchline = await getData();
  title.textContent = punchline;
}
