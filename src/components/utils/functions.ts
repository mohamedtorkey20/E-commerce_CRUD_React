/**
 * 
 * @param {string}txt -the input text to be sliced.
 * @param {number} [maxLength=40] -the maxmimum length  
 * @returns - the txt after make slice with ... 
 */

export function txtSlicer(txt:string,maxLength:number=40)
{
    if(txt.length>=maxLength) return `${txt.slice(0,maxLength)} ....`;
    return txt;

}