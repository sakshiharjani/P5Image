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
  createCanvas(1020, 1000);
  pixelDensity(1);
  background(200, 200, 250)
    
  image (image1, 20, 10, 230, 210);
  image (image2, 270, 50, 230, 250);
  image (image3, 520, 10, 230, 210);
  image (image4, 770, 50, 230, 250);
  image (image5, 20, 360, 230, 210);
  image (image6, 270, 400, 230, 250);
  image (image7, 520, 360, 230, 210);
  image (image8, 770, 400, 230, 250);
  image (image9, 20, 710, 230, 210);
  image (image10, 270, 750, 230, 250);
  image (image11, 520, 710, 230, 210);
  image (image12, 770, 750, 230, 250);
    
  textSize(15)
  textAlign(CENTER)
  text("Drag mouse from top left to bottom right.", 385, 30)

  stroke(140, 0, 170)
  line(270, 35, 50, 15)
  fill(170, 0, 170)
  triangle(55, 10, 50, 19, 30, 12)
  

}


function redTint () {
    loadPixels();
      for (let y = 0; y < mouseY; y++) {
        for (let x = 20; x < mouseX; x++) {
          let index = (x + y * width)*4;
        
          let r = pixels[index+0];
          let g = pixels[index+1];
          let b = pixels[index+2];
          let a = pixels[index+3];   
          
         if (r<200, g<100, b < 200) {
          pixels[index+0] = r
          pixels[index+1] = 0
          pixels[index+2] = 0
           
       } else if (b>240) {
          continue;  
       } else {
          
          pixels[index+0] = 255
          pixels[index+1] = 250
          pixels[index+2] = b
        }
      }
      }
      updatePixels();
}



function fade() {
  loadPixels()
    for (let y = 0; y < mouseY; y++) {
        for (let x = 270; x < mouseX; x++) {
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
          pixels[index+3] = 255
          }
        }
    }
  updatePixels()
}

function greenTint () {
    loadPixels();
      for (let y = 0; y < mouseY; y++) {
        for (let x = 520; x < mouseX; x++) {
          let index = (x + y * width)*4;
        
          let r = pixels[index+0];
          let g = pixels[index+1];
          let b = pixels[index+2];
          let a = pixels[index+3];   
            
     if (r<50, g<200, b < 250) {
          pixels[index+0] = r-250
          pixels[index+1] = g
          pixels[index+2] = 130
           
       } else if (b>240) {
          continue;  
       } else {
          
          pixels[index+0] = 100
          pixels[index+1] = 150
          pixels[index+2] = 250
        }
      }
      }
      updatePixels();
}

function flowerTint () {
      loadPixels();
      for (let y = 0; y < mouseY; y++) {
        for (let x = 770; x < mouseX; x++) {
         let index = (x + y * width)*4;
        
          let r = pixels[index+0];
          let g = pixels[index+1];
          let b = pixels[index+2];
          let a = pixels[index+3];   
          
         if (r > 150, b > 100) {
          pixels[index+0] = r
          pixels[index+1] = g
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
  if (mouseX < 270) {
    redTint()
  }  
  if (mouseX > 250 && mouseX < 500) {
    fade()
  }
  if (mouseX > 500 && mouseX < 750) {
    greenTint()
  }
  if (mouseX > 700 && mouseX < 1000) {
    flowerTint()
  }
}