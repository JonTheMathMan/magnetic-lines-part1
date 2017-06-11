function simulateMagneticField()
{
    for(let i = 0;i<ironFilings.length;i++)
    {
        rotateToEqualibrium(ironFilings[i]);
    }
}