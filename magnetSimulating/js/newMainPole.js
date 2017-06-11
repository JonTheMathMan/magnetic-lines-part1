function newMainPole(poleProperties={left:0,top:0,poleType:"south"})
{
    //add an image corresponding to the poleProperties.
    var pole = document.createElement("img");
    if(poleProperties.poleType === "south")
        {
            pole.src = "./south.png";
        }else{
            pole.src = "./north.png";
        }
    pole.style.position = "absolute";
    pole.style.left= poleProperties.left-5;
    pole.style.top = poleProperties.top-5;
    document.body.appendChild(pole);
    
    //return the poleProperties object.
    return poleProperties;
}