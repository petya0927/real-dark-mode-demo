import realDarkMode from "real-dark-mode";
import { inject } from '@vercel/analytics';

inject();

document.getElementById("toggle")!.addEventListener("click", () => {
  realDarkMode();
});