import { getPathToScript } from "./files.js";

await import(getPathToScript(import.meta.url, "loadHeader.js"));
await import(getPathToScript(import.meta.url, "RandomGame.js"));
await import(getPathToScript(import.meta.url, "Modal.js"));

document.addEventListener("DOMContentLoaded", () => {
    console.log("Project Scripts loaded");
});