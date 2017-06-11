var souths = [];
var norths = [];


function rotateToEqualibrium(filing)
{
    var centerX = filing.width/2+filing.left;
    var centerY = filing.height/2+filing.top;
    var offset = 10;
    var upperPoint = {left:centerX,top:centerY-offset};
    var lowerPoint = {left:centerX,top:centerY+offset};
    var newRotation = 0;
    var noBalanceFound = true;
    
    var balanceScore = 0;

    for(var deg=0;deg<360;deg++)
    {
        //spin the ironfiling's pole points
        upperPoint.left = centerX + (offset*Math.sin(deg*Math.PI/180));
        upperPoint.top = centerY - (offset*Math.cos(deg*Math.PI/180));
        lowerPoint.left = centerX - (offset*Math.sin(deg*Math.PI/180));
        lowerPoint.top = centerY + (offset*Math.cos(deg*Math.PI/180));
        
        //get the attraction distances
        let attractions = souths.map(function(aSouth){return getDistance(aSouth,upperPoint);}).concat(norths.map(function(aNorth){return getDistance(aNorth,lowerPoint);}));
        
        //get the repulsion distances
        let repulsions = souths.map(function(aSouth){return getDistance(aSouth,lowerPoint);}).concat(norths.map(function(aNorth){return getDistance(aNorth,upperPoint);}));
        
        let competingBalanceScore = getArrayProduct(repulsions)/getArrayProduct(attractions);
        
        if(balanceScore<competingBalanceScore)
            {
                balanceScore = competingBalanceScore;
                newRotation = deg;
                noBalanceFound = false;
            }
    }
    if(noBalanceFound)
        {
            filing.style.opacity = 1;
        }else{
            filing.style.transform = "rotate("+newRotation+"deg)";
        }
}

function getArrayProduct(anArray)
{
    var product = 1;
    anArray.forEach(function(aNumber){product*=aNumber;});
    return product;
}