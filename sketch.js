function setup() {
  createCanvas(400, 400)
}


function draw() {
  background('white');

fill('#3F51B5');

textSize(50)
textAlign(CENTER,CENTER);
textFont('georgia')


let maximo = width;
let minimo = 0;

console.log('Caminhoneiro'.length);
let palavra='Caminhoneiro' ;
let quantidade=map(mouseX,0,width,1,palavra.length);
let parcial=palavra.substring(0,quantidade);
text(parcial,200,200)
  
  

}