function getDistance(firstPointObject,secondPointObject)
{
    var distance = Math.sqrt(Math.pow(secondPointObject.left-firstPointObject.left,2)+Math.pow(secondPointObject.top-firstPointObject.top,2));
    return distance;
}

function getPixelDistance(firstPointObject,secondPointObject)
{
    return Math.round(getDistance(firstPointObject,secondPointObject));
}