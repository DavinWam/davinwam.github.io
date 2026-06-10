import { getPathToScript } from "./files.js";

await import(getPathToScript(import.meta.url, "loadHeader.js"));

document.addEventListener("DOMContentLoaded", () => {
    console.log("Universal Scripts loaded");
});