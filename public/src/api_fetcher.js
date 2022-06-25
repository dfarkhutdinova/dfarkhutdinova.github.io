async function getQuote() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    document.getElementById("citation").innerHTML = data.joke;
}
getQuote();
  