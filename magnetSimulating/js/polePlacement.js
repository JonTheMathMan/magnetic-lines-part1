var placeSouthPole = false;
var placeNorthPole = false;

function prepareForSouthPlacement()
{
    placeSouthPole = true;
    placeNorthPole = false;
    
    document.getElementById("southButton").innerHTML = "Please click on the screen.";
    document.getElementById("northButton").innerHTML = "Make a North pole.";
}

function prepareForNorthPlacement()
{
    placeNorthPole = true;
    placeSouthPole = false;
    
    document.getElementById("northButton").innerHTML = "Please click on the screen.";
    document.getElementById("southButton").innerHTML = "Make a South pole.";
}

addEventListener("click",placeAPole);
function placeAPole(e)
{
    var southButton = document.getElementById("southButton");
    var northButton = document.getElementById("northButton");
    var generateButton = document.getElementById("generate");
    var simulateButton = document.getElementById("simulate");
    if(placeSouthPole===true && placeNorthPole===false && e.target!=southButton && e.target!=northButton && e.target!=generateButton && e.target!=simulateButton)
        {
            souths.push(newMainPole({left:e.pageX,top:e.pageY,poleType:"south"}));
            placeSouthPole = false;
            placeNorthPole = false;
            document.getElementById("southButton").innerHTML = "Make a South pole.";
        }else if(placeNorthPole===true && placeSouthPole===false && e.target!=southButton && e.target!=northButton && e.target!=generateButton && e.target!=simulateButton){
            norths.push(newMainPole({left:e.pageX,top:e.pageY,poleType:"north"}));
            placeSouthPole = false;
            placeNorthPole = false;
            document.getElementById("northButton").innerHTML = "Make a North pole.";
        }
}