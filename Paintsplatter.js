var generatorx = new Random(5);
var generatory = new Random(6);

draw = function() {
    var mean1 = 200;
    var mean2 = 200;
    var standardDeviation1 = 200;
    var standardDeviation2 = 200;
    var num1 = generatorx.nextGaussian();
    var num2 = generatory.nextGaussian();
    var x = standardDeviation1 * num1 + mean1;
    var y = standardDeviation2 * num2 + mean2;
    
    var color1 = random(255);
    var color2 = random(255);
    var color3 = random(255);
    
    noStroke();
    fill(color1, color2, color3);
    ellipse(x, y, x%10, y%10);
};

