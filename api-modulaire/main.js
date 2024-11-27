import changeTitle from "./welcomeService";

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html"
) {
  changeTitle();
}
