var xPos2 = 199;
var yPos2 = 199;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
    
    stroke(255, 242, 0);
    
    xPos++;
    yPos--;
    
    xPos2--;
    yPos2++;
};
