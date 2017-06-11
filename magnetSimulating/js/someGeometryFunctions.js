function getLineAngle(point1={left:0,top:0},point2={left:1,top:1})
{
    var angle = 0;
    var delta = {x:point2.left-point1.left, y:point2.top-point1.top};
    
    if(delta.x>0)
        {
            angle = Math.atan(delta.y/delta.x);
        }else if(delta.x<0){
            angle = Math.atan(delta.y/delta.x) + Math.PI;
        }else if(delta.x==0 && delta.y>0){
            angle = Math.PI/2;
        }else if(delta.x==0 && delta.y<0){
            angle = 0-Math.PI/2;
        }
    return angle*180/Math.PI+90;
}
    
function isInRange(val,min,max)
{
    if(val>min && val<max)
        {
            return true;
        }else{
            return false;
        }
}