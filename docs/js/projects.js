import { getPathToScript } from "./files.js";

await import(getPathToScript(import.meta.url, "./SiteShared/loadHeader.js"));
await import(getPathToScript(import.meta.url, "./ProjectShared/RandomGame.js"));
await import(getPathToScript(import.meta.url, "./ProjectShared/Modal.js"));

document.addEventListener("DOMContentLoaded", () => {
    console.log("Project Scripts loaded");
});