import { getPathToScript } from "./files.js";

await import(getPathToScript(import.meta.url, "loadHeader.js"));
await import(getPathToScript(import.meta.url, "GameCarousel.js"));
await import(getPathToScript(import.meta.url, "lib/p5.js"));
await import(getPathToScript(import.meta.url, "banner-sketch.js"));
await import(getPathToScript(import.meta.url, "particle-sketch.js"));

document.addEventListener("DOMContentLoaded", () => {
    console.log("Homepage Scripts loaded");
});