
export const DOCS_ROOT = new URL("../", import.meta.url);


// Finds a file relative to docs/
export function findFile(fileName, folder)
{
    const docsRoot = new URL("../", import.meta.url);

    const targetUrl = new URL(`${folder}/${fileName}`, docsRoot);

    return {
        absolute: targetUrl.href,
        relative: `${folder}/${fileName}`
    };
}

// Gets path information between caller and target
export function getPathTo(callerPath, targetFolder, fileName)
{
    const callerUrl = new URL(callerPath);

    const target = findFile(fileName, targetFolder);

    const docsRoot = new URL("../", import.meta.url);

    const callerRelative = callerUrl.href.replace(docsRoot.href, "");

    console.log("Caller:", callerRelative);
    console.log("Target:", target.relative);

    return {
        caller: callerRelative,
        target: target.relative,
        absolute: target.absolute
    };
}


export function getPathToScript(callerPath, fileName)
{
    return getPathTo(callerPath, "js", fileName).absolute;
}