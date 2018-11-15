var book = [
    {
    title: "The Giver",
    stars: 1,
    author: "Sean Pruss"
    },
    {
    title: "Red Dead",
    stars: 4,
    author: "J. Marston"
    },
    {
    title: "Grammerly",
    stars: 5,
    author: "Lil Pump, P.H.D"
    },
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

text(book.title, 15, 29, 70, 100);

for (var i = 0; i < book.length; i++) { // Books and titles
    fill(214, 255, 219);
    rect(122*i, 14, 109, 106);
    fill(0, 0, 0);
    textSize(15);
    text(book[i].title, i*123+4, 56);
}

for (var j = 0; j < 3; j++) { // Authors
    fill(0, 0, 0);
    text(book[j].author, j*122+4, 79);
}

for (var o = 0; o < 2; o++){ // Stars for book #1
    image(getImage("cute/Star"), 13 + i * -2, 89, 20, 30);
}

for (var e = 0; e < 4; e++){ // Stars for book #2
    image(getImage("cute/Star"), 184 + e * -19, 87, 20, 30);
}

for (var p = 0; p < 5; p++){ // Stars for book #3
    image(getImage("cute/Star"), 319 + p *-17, 88, 20, 30);
}
