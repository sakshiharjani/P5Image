let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;
let image10;
let image11;
let image12;

function preload() {
  image1 = loadImage('image1.png');
  image2 = loadImage('image2.png');
  image3 = loadImage('image3.png');
  image4 = loadImage('image4.png');
  image5 = loadImage('image5.png');
  image6 = loadImage('image6.png');
  image7 = loadImage('image7.png');
  image8 = loadImage('image8.png');
  image9 = loadImage('image9.png');
  image10 = loadImage('image10.png');
  image11 = loadImage('image11.png');
  image12 = loadImage('image12.png');
}

function setup() {
  createCanvas(1000, 1000);
  pixelDensity(1);
  
  image (image1, 0, 0, 230, 250);
  image (image2, 250, 0, 230, 250);
  image (image3, 500, 0, 230, 250);
  image (image4, 750, 0, 230, 250);
  image (image5, 0, 350, 230, 250);
  image (image6, 250, 350, 230, 250);
  image (image7, 500, 350, 230, 250);
  image (image8, 750, 350, 230, 250);
  image (image9, 0, 700, 230, 250);
  image (image10, 250, 700, 230, 250);
  image (image11, 500, 700, 230, 250);
  image (image12, 750, 700, 230, 250);
  

}


function redTint () {
    loadPixels();
      for (let y = 0; y < mouseY; y++) {
        for (let x = 0; x < mouseX; x++) {
          let index = (x + y * width)*4;
        
          let r = pixels[index+0];
          let g = pixels[index+1];
          let b = pixels[index+2];
          let a = pixels[index+3];   
          
         if (r<200, g<100, b < 200) {
          pixels[index+0] = r-100
          pixels[index+1] = g
          pixels[index+2] = b
           
          } else {
          
          pixels[index+0] = 200
          pixels[index+1] = 150
          pixels[index+2] = 200
        }
      }
      }
      updatePixels();
}



function something() {
  loadPixels()
    for (let y = 0; y < mouseY; y++) {
        for (let x = 250; x < mouseX; x++) {
          let index = (x + y * width)*4;
          
          let r = pixels[index+0];
          let g = pixels[index+1];
          let b = pixels[index+2];
          let a = pixels[index+3];   
          
          let c = color(r, g, b, a)
          
          let tint = brightness(c)
          
          if (tint < 70) {
          pixels[index+0] = 100
          pixels[index+1] = 100
          pixels[index+2] = 100
          }
        }
    }
  updatePixels()
}

function greenTint () {
    loadPixels();
      for (let y = 0; y < mouseY; y++) {
        for (let x = 500; x < mouseX; x++) {
          let index = (x + y * width)*4;
        
          let r = pixels[index+0];
          let g = pixels[index+1];
          let b = pixels[index+2];
          let a = pixels[index+3];   
          
         if (r < 200, g < 200, b > 100) {
          pixels[index+0] = r- 250
          pixels[index+1] = g
          pixels[index+2] = 130
         
         }
}
      }
      updatePixels();
}

function flowerTint () {
      loadPixels();
      for (let y = 0; y < mouseY; y++) {
        for (let x = 750; x < mouseX; x++) {
         let index = (x + y * width)*4;
        
          let r = pixels[index+0];
          let g = pixels[index+1];
          let b = pixels[index+2];
          let a = pixels[index+3];   
          
         if (r > 200, b > 100) {
          pixels[index+0] = r
          // pixels[index+1] = g
          pixels[index+2] = b
         
         }else if (g > 1) {
          pixels[index+0] = 0
          pixels[index+1] = 0
          pixels[index+2] = 0
         }
}
      }
      updatePixels();
}

function mouseDragged() {
  if (mouseX < 230) {
    redTint()
  }  
  if (mouseX > 250 && mouseX < 480) {
    something()
  }
  if (mouseX > 500 && mouseX < 750) {
    greenTint()
  }
  if (mouseX > 750) {
    flowerTint()
  }
}
