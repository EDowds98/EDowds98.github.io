const images = [];
const RIGHTARROW = 39;
const LEFTARROW = 37;
let IMAGE_POS;
let TOP_MARGIN = 10;
let IMG_WIDTH;
let IMG_HEIGHT;
let imgCounter = 0;

async function setup() {
  images[0] = await loadImage('/assets/paint_lamp_1.png');
  images[1] = await loadImage('/assets/paint_lamp_2.png');
  images[2] = await loadImage('/assets/paint_lamp_3.png');
  images[3] = await loadImage('/assets/paint_lamp_4.png');
  images[4] = await loadImage('/assets/paint_lamp_5.png');
  images[5] = await loadImage('/assets/paint_lamp_6.png');

  canvas = createCanvas(600, 800);
  background(255);
  resizeCanvas(windowWidth / 2, windowHeight)

  IMAGE_POS = 0;
  IMG_WIDTH = windowWidth / 2;
  IMG_HEIGHT = windowHeight - 10;

 canvas.position(windowWidth / 2, 0);
  frameRate(6);

  image(images[0], IMAGE_POS, TOP_MARGIN, IMG_WIDTH , IMG_HEIGHT);
}

function draw() {
  if(keyIsDown(RIGHTARROW)) {
    console.log('here');
    image(images[abs(imgCounter % 6)], IMAGE_POS, TOP_MARGIN, IMG_WIDTH , IMG_HEIGHT);
    imgCounter++;
  } 

  else if(keyIsDown(LEFTARROW)) {
    image(images[5 - abs(imgCounter % 6)], IMAGE_POS, TOP_MARGIN, IMG_WIDTH, IMG_HEIGHT);
    imgCounter++;
    console.log('image value:' + abs(imgCounter % 6) + 'imgCounter: ' + imgCounter);

  } else {
    image(images[abs(imgCounter % 6)], IMAGE_POS, TOP_MARGIN, IMG_WIDTH, IMG_HEIGHT);
  }
}

/* 
 * Program to rotate a sequence of images either clockwise
 * or anti clockwise depending on the arrow key being pressed
 * 
 * 1 - import all images maybe store as array?
 * 2 - display image[0] on screen
 * 3 - on right arrow keypress display next image at
 *     6 fps
 * 4 - if left arrow keypress display prev image 
 */