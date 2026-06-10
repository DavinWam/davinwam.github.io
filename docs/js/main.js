import { getPathToScript } from "./files.js";

await import(getPathToScript(import.meta.url, "./SiteShared/loadHeader.js"));
await import(getPathToScript(import.meta.url, "./MainPage/GameCarousel.js"));
await import(getPathToScript(import.meta.url, "./banner/p5.js"));
await import(getPathToScript(import.meta.url, "./banner/banner-sketch.js"));
await import(getPathToScript(import.meta.url, "./banner/particle-sketch.js"));

document.addEventListener("DOMContentLoaded", () => {
    console.log("Homepage Scripts loaded");
});