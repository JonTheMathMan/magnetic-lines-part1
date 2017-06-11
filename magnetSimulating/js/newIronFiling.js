function makeNewIronFiling(generationProperties={left:0,top:0})
{
    var ironFiling = Object.assign(document.createElement("img"),{src:"./ironFiling.png"},generationProperties);
    ironFiling.style.position = "absolute";
    ironFiling.style.left = ironFiling.left;
    ironFiling.style.top = ironFiling.top;
    ironFiling.style.opacity = 0.5;
    document.body.appendChild(ironFiling);
    return ironFiling;
}