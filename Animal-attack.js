// An attempt was made but this is a beaver

var bodyX = 200;
var bodyY = 220;
var bodyW = 127;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(158, 122, 12);
    ellipse(bodyX, bodyY, bodyW, 121); // face
    
    fill(255, 255, 255);
    ellipse(176, 200, 20, 20); // eyes
    ellipse(219, 200, 20, 20);
    
    fill(0, 0, 0);
    ellipse(bodyX+19, bodyY-20, 5, 5);//pupils
    ellipse(bodyX-24, bodyY-20, 5, 5);
    
    rect(bodyX-9, bodyY-3, 6, 13); // nose
    rect(bodyX+3, bodyY-3, 6, 13);
    
    line(bodyX+14, bodyY+36, 158, 223); //mouth
    
    fill(255, 255, 255); // teeth
    rect(bodyX-28, bodyY+15, 6, 13);
    rect(bodyX-21, bodyY+15, 6, 13);
    
    fill(168, 101, 18);
    ellipse(bodyX+32, bodyY-63, 26, 48); // ears
    ellipse(bodyX-38, bodyY-63, 26, 48); // ears
};
