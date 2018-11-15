background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

var o = -69; // Position of grass
var s = 10; // Position of windows

for(var i = 0; i < 2; i++) { // Windows
    fill(20, 166, 219);
    rect(s+=114, 200, 45, 45);
}

for (var x = 0; x < 6; x++) { // Grass
    fill(0, 255, 0);
    rect(o+=68, 358, 68, 42);
}

