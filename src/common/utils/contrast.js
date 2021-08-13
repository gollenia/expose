
/**
 * Returns or calculates a contrast to a given color.
 * 
 * @param {Color} sourceColor A Gutenberg Color Object
 * @return {string} Hex Color Code
 */

function contrast(sourceColor) {

    if(sourceColor == undefined) {
        return;
    }
    //var Color = require('color');

    // In my themes, I add an own contrast Option
    
    var contrastColor = "#ffffff";
    
    contrastColor = "#000000";
    
    return contrastColor;
}

export default contrast;