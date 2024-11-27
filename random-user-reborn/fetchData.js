export default async function fetchData() {
  const url = "https://randomuser.me/api/";
  try {
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.results[0];
  } catch (error) {
    console.error(error.message);
  }
}
