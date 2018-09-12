var heart = [];
var links = ['https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png',
           'https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon-by-vexels.png',
            'https://png.icons8.com/cotton/2x/novel.png'];

var images = [];

function preload(){
  for(var i = 0; i < links.length; i++){
    images[i] = loadImage(links[i]);
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight).position(0, 0);
  
  for(var i = 0; i < windowHeight / 50; i++){
    var sizeHeart = random(30, 70);
    heart[i] = new Thing(random(width), random(height), sizeHeart, sizeHeart, floor(random(links.length)));
  }
}

function draw(){
  clear();
  for(var h of heart){
    showThing(h);
    updateThing(h);
  }
}

function mouseDragged() {
}

function Thing(x, y, w, h, imgIndex){
  this.img = imgIndex;
  this.pos = createVector(x, y);
  this.size = createVector(w, h);
  this.vel = createVector(0, 0);
}

function updateThing(t){
  t.pos.add(t.vel);

  if(mouseIsPressed){
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, width / 10, width / 10);

    var d = p5.Vector.dist(createVector(mouseX, mouseY), t.pos);
    if(d < width / 20 + t.size.x){
      t.pos = createVector(mouseX, mouseY);
    }
    // t.vel.add(createVector(mouseX - pmouseX, mouseY - pmouseY).mult(0.2));
  
  } else {
    t.vel.add(random(-.5, .5), random(-.1, 0));
  }
  
  if(t.pos.y < 0){
    t.pos.y = height + t.size.y;
    t.pos.x = width / 2;
    t.vel = createVector(0, 0);
  } 
  if(t.pos.x > width || t.pos.x < 0){
    t.vel.x *= -0.5;
    t.vel.y *= -0.1
    if(t.pos.x > width) t.pos.x = width;
    else t.pos.x = 0;
  } 
}

function showThing(t){
  if(images[t.img]){
    push();
    translate(t.pos.x, t.pos.y);
    image(images[t.img], -t.size.x / 2, -t.size.y / 2, t.size.x, t.size.y); 
    pop();
  }
}

function windowResized(){ 
  resizeCanvas(windowWidth, windowHeight, true);
}
