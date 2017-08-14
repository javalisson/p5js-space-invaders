/**
 * p5js space invaders
 * 
 * 
 */

var spriteSheet;
var quadros = [0, 0];

(function () {
    setInterval(function () {
        quadros[0]++;
        if (quadros[0] > 1) quadros[0] = 0;
    }, 500);

    setInterval(function () {
        quadros[1]++;
        if (quadros[1] > 1) quadros[1] = 0;
    }, 600);
})();

function preload() {
    // carrega a sprite sheet
    spriteSheet = loadImage('sprite-sheet.png');
}

// chamada no inicio do programa
function setup() {
    // cria o quadros, com dimensoes 900 x 400
    createCanvas(900, 400);
    noCursor();
}

// chamada toda vez que o quadros for redesenhado
// ou seja, a cada frame da animacao
function draw() {
    // pinta o fundo de preto
    background(0);
    desenhaInimigo1(15, 15);
    desenhaInimigo2(64, 0);
    desenhaInimigo2(mouseX, mouseY);
}

function desenhaInimigo1(x, y) {
    if (quadros[0] == 1) {
        image(spriteSheet, 7, 224, 17, 17, x, y, 17, 17);
    } else {
        image(spriteSheet, 40, 224, 17, 17, x, y, 17, 17);
    }       
}

function desenhaInimigo2(x, y) {
    if (quadros[1] == 1) {
        image(spriteSheet, 68, 216, 32, 32, x, y, 32, 32);
    } else {
        image(spriteSheet, 101, 216, 32, 32, x, y, 32, 32);
    }       
}
