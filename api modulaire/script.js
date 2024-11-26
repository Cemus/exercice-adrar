import getData from "./welcomeService";

const title = document.getElementsByTagName("h1")[0];
const punchline = await getData();
title.textContent = punchline;
