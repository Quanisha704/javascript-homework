"use strict";




function countMelons(melonArray)
{
    """Take in a list and return a dictionary of # of melons by melon type."""

    const melonCounts = {};

    for (const melon of melonArray)
    {
        if (melonCounts[melon])
       {
           melonCounts[melon] = melonCounts[melon] + 1;

       }
            
        else
        {
            melonCounts[melon] = 1;
        }
           
    }
        

    return melonCounts;
}
  
