var ironFilings=[];
function generateIronFilings(rows=50,columns=50)
{
    if(ironFilings.length===0)
        {
            var topOffset = 40;
            for(var i=0;i<rows;i++)
                {
                    for(var u=0;u<columns;u++)
                        {
                            var filing = makeNewIronFiling({left:u*30,top:i*30+topOffset});
                            ironFilings.push(filing);
                        }
                }
        }
}