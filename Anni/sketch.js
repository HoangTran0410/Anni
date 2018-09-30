var countDown = '';

var numHearts = 15;
var hearts = [];

var images = [];
var links = ['https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-512.png',
  'https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon-by-vexels.png',
  'https://png.icons8.com/cotton/2x/novel.png'
];

var bgNow;
var bgs = []; // image lover
var linksbg = [
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/12718268_522801037891501_948124782210163873_n.jpg?_nc_cat=103&efg=eyJpIjoidCJ9&oh=a828fd4a2210ba5769dc603943119085&oe=5C1B7570',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/12654694_522800921224846_5057049424931724901_n.jpg?_nc_cat=104&efg=eyJpIjoidCJ9&oh=cf6063cfd212cc976ded2a722e5c5eb0&oe=5C62CE7C',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/12654223_522801094558162_1012011791370611538_n.jpg?_nc_cat=101&efg=eyJpIjoidCJ9&oh=669956026f12487e31d8918eca173881&oe=5C24B625',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/12718270_522801127891492_7421445800295357212_n.jpg?_nc_cat=111&efg=eyJpIjoidCJ9&oh=cbf368ab90d84b6a32f4df56f2150f4a&oe=5C5A4B47',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/12705499_522801184558153_4993753170563575264_n.jpg?_nc_cat=110&efg=eyJpIjoidCJ9&oh=117765b59f5736a7b619267aa2469512&oe=5C1CCAD0',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/12592443_522809311224007_5045703688213550814_n.jpg?_nc_cat=106&efg=eyJpIjoidCJ9&oh=544f19ca7d322aed2e67f365fdc3ae83&oe=5C189A8A',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/26219425_842939742544294_7189162594457555804_n.jpg?_nc_cat=106&efg=eyJpIjoidCJ9&oh=1a8cef21ffd9c42f1a168bbd24de8241&oe=5C583565',
  'https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/26169358_842940109210924_2319204552651413682_n.jpg?_nc_cat=0&oh=03a33b8017dd569babe7bcc2c1e6a9ee&oe=5C3214FD',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/26229946_842939925877609_3562632203468358435_n.jpg?_nc_cat=111&efg=eyJpIjoidCJ9&oh=903679c0c91874c2fddb4d6931f420e7&oe=5C1621C2',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/26230473_842940119210923_8969315413247043566_n.jpg?_nc_cat=103&efg=eyJpIjoidCJ9&oh=eb68e54664563001849e9e1a14a3e23e&oe=5C58DFBD',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21765311_796573770514225_6420336719028118906_n.jpg?_nc_cat=103&efg=eyJpIjoidCJ9&oh=02935bb020a92f79ace953c63d40fc51&oe=5C510B05',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21766366_796573873847548_8618406946470014877_n.jpg?_nc_cat=107&efg=eyJpIjoidCJ9&oh=ceaf84cd3332c6ba54941ec718d55617&oe=5C5F1253',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/18527951_736731223165147_3937537822037731935_n.jpg?_nc_cat=108&efg=eyJpIjoidCJ9&oh=0c48d1d66b02d46691a7da44f97c87d2&oe=5C55811C',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/18528063_736731286498474_5586606735442252675_n.jpg?_nc_cat=110&efg=eyJpIjoidCJ9&oh=dcd7af8d75fc0da435ae41bee7a2225e&oe=5C59E8D8',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/18034133_722316014606668_7592736235061928207_n.jpg?_nc_cat=104&efg=eyJpIjoidCJ9&oh=d81b2f93f2d73d739b83718f8f5767a1&oe=5C5B6C0A',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p600x600/17883853_716746605163609_4407378008493076144_n.jpg?_nc_cat=104&efg=eyJpIjoidCJ9&oh=18cc95d08eb5f4c7c3414901f4641c84&oe=5C226253',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p600x600/17903818_716746641830272_7659551340896695398_n.jpg?_nc_cat=100&efg=eyJpIjoidCJ9&oh=f1ab8937968dca187beccf9fefb4089c&oe=5C2789C8',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p600x600/17903683_716746671830269_6834069163044454430_n.jpg?_nc_cat=103&efg=eyJpIjoidCJ9&oh=c102bb47dd589d7b6f788254e2e1454e&oe=5C28CD7F',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/17884114_716746768496926_7317083792765790938_n.jpg?_nc_cat=108&efg=eyJpIjoidCJ9&oh=12ae3944b82161f7a1956607ccc0488f&oe=5C154FFD',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t31.0-8/fr/cp0/e15/q65/23845788_823008041204131_252715109319065890_o.jpg?_nc_cat=106&efg=eyJpIjoidCJ9&oh=16a7fbbd5b1a68ddf75e8efd55a79deb&oe=5C2051CC',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/22221771_802378973267038_8677315229654190966_n.jpg?_nc_cat=105&efg=eyJpIjoidCJ9&oh=301d8b99927abca7c390b114552bc17d&oe=5C24CEF3',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/17883682_716742145164055_3138492748687909743_n.jpg?_nc_cat=105&efg=eyJpIjoidCJ9&oh=d73f42f4c59038cddc38d8a77a93abd9&oe=5C1FEC48',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/15242028_648451755326428_2121569327475263054_n.jpg?_nc_cat=111&efg=eyJpIjoidCJ9&oh=9684cae3d30c2506915d10917b70fca7&oe=5C1F98CF',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/13606505_579982212173383_5084849053505927916_n.jpg?_nc_cat=110&efg=eyJpIjoidCJ9&oh=71a9d440b0b49ded0b349e4d0a38f343&oe=5C261167',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/13442178_573523096152628_2582490408907952164_n.jpg?_nc_cat=109&efg=eyJpIjoidCJ9&oh=08d11b0e06a0de4e06cd4beb68d5c10f&oe=5C5BD8B5',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/22310206_802379069933695_5747236862938289317_n.jpg?_nc_cat=103&efg=eyJpIjoidCJ9&oh=d82554bbcd30272225b84b20a863f6ec&oe=5C5372EF',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21767960_797213493783586_2169440986811470168_n.jpg?_nc_cat=105&efg=eyJpIjoidCJ9&oh=1b9a98f31bae1dd26d9b234df1f64b72&oe=5C50B1EB',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/22007965_797213500450252_6030182647255154592_n.jpg?_nc_cat=107&efg=eyJpIjoidCJ9&oh=a35e1fca85374e64660ce8296aa8987f&oe=5C1D0809',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21762244_797213583783577_555353846017240917_n.jpg?_nc_cat=111&efg=eyJpIjoidCJ9&oh=0ee7ade84ff3313e07ffa04c3264f962&oe=5C5BEACD',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21766521_797213580450244_6732767660690618578_n.jpg?_nc_cat=111&efg=eyJpIjoidCJ9&oh=76a900ee0b8c2d95941a2b3b36f75312&oe=5C5B2643',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21765154_797213590450243_5656112353159630081_n.jpg?_nc_cat=102&efg=eyJpIjoidCJ9&oh=0fa1a7123f028779f89d3e5f4de295d8&oe=5C57F967',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21764829_797213677116901_4575072447491384250_n.jpg?_nc_cat=104&efg=eyJpIjoidCJ9&oh=09b48c6dc9e8b4b13b08f6511ad79743&oe=5C5CFE57',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21762142_797213497116919_8874308888492481423_n.jpg?_nc_cat=102&efg=eyJpIjoidCJ9&oh=9397b33ff30552f9fa874a15f77400a3&oe=5C60D0EA',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21761858_797213707116898_6464717834194875208_n.jpg?_nc_cat=102&efg=eyJpIjoidCJ9&oh=6014aa8fd73b86145e72cd6c0ea25f6d&oe=5C1535CB',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21462721_795636387274630_3523321974715917839_n.jpg?_nc_cat=103&efg=eyJpIjoidCJ9&oh=0a12ae91e0c93f743c247e22d36be2fc&oe=5C5290DC',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21686233_795636467274622_5616494003826761019_n.jpg?_nc_cat=102&efg=eyJpIjoidCJ9&oh=62fadd60fee5d615ee09515086b6cba0&oe=5C27F39B',
  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/21616473_795636683941267_8919945036732370360_n.jpg?_nc_cat=104&efg=eyJpIjoidCJ9&oh=b3e6afbc06be9b8ab30b101c2eeb0d08&oe=5C55D5B3',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/22228246_802378873267048_2479680172197855283_n.jpg?_nc_cat=101&efg=eyJpIjoidCJ9&oh=242b7b4fab746bbfabcc75cf6fbf8cca&oe=5C509FA6',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/22366565_802378826600386_5585295192942771526_n.jpg?_nc_cat=103&efg=eyJpIjoidCJ9&oh=585fd5f771e1d36da539d1546cb69415&oe=5C576ADC',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/19989672_763622897142646_6395339520154166786_n.jpg?_nc_cat=109&efg=eyJpIjoidCJ9&oh=19a1b11e398ea13e736a8f47213b87d3&oe=5C1E7F44',
  'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/19756770_763622920475977_2127870344460182254_n.jpg?_nc_cat=100&efg=eyJpIjoidCJ9&oh=51e434c7b26c5124387126be4974e21d&oe=5C28835E',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/20106349_763622980475971_6414522978247795854_n.jpg?_nc_cat=109&efg=eyJpIjoidCJ9&oh=ada82b6a8bca69ae43e1d6aa9ba8702c&oe=5C5367D6',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/19989293_763623033809299_5029010726209206774_n.jpg?_nc_cat=111&efg=eyJpIjoidCJ9&oh=cad3ae16a2b1c2fab57f6994c17b2956&oe=5C580D86',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/19905135_763623097142626_1151844971058100259_n.jpg?_nc_cat=111&efg=eyJpIjoidCJ9&oh=5e509a65bb8d13537c78a192a44d4417&oe=5C510035',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/19990034_763623277142608_7910790977814681107_n.jpg?_nc_cat=108&efg=eyJpIjoidCJ9&oh=0c8aa0a0f2e8480cf71a37a5f006b3b6&oe=5C16E591',
  'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/s600x600/19961219_763623353809267_1234167007871334139_n.jpg?_nc_cat=101&efg=eyJpIjoidCJ9&oh=a9d3bb071b7c995bfa7291ec5dcc9b1d&oe=5C58E602',
  'https://scontent.fsgn2-3.fna.fbcdn.net/v/t31.0-8/fr/cp0/e15/q65/20232854_767866206718315_1718008960517086029_o.jpg?_nc_cat=106&efg=eyJpIjoidCJ9&oh=d5da82ab5dbee265c51be4b30508369a&oe=5C1BF90D'
];

var but;

function preload() {
  for (var i = 0; i < links.length; i++) {
    images[i] = loadImage(links[i]);
  }

  bgNow = floor(random(linksbg.length));
  bgs[bgNow] = loadImage(linksbg[bgNow]);
}

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont('Consolas');
  textSize(50);

  but = {
    left: {
      x: 100,
      y: height - 100,
      r: 30
    },
    right: {
      x: width - 100,
      y: height - 100,
      r: 30
    }
  };

  for (var i = 0; i < numHearts; i++) {
    var sizeHeart = random(30, 70);
    hearts[i] = new Thing(random(width), random(height), sizeHeart, sizeHeart, floor(random(links.length)));
  }
}

function draw() {
  // clear();
  background(bgs[bgNow] || 255);
  noStroke();

  fill(0, 50);
  rect(width / 2, height / 2, width, 70);

  fill(255);
  text(countDown, width / 2, height / 2);

  for (var h of hearts) {
    showThing(h);
    updateThing(h);
  }

  showBut();
}

function mouseClicked() {
  var mouse = createVector(mouseX, mouseY);
  var butleft = createVector(but.left.x, but.left.y);
  var butRight = createVector(but.right.x, but.right.y);

  if (p5.Vector.dist(mouse, butleft) < but.left.r) {
    changeBg(-1);
  }
  if (p5.Vector.dist(mouse, butRight) < but.right.r) {
    changeBg(1);
  }
}

function showBut() {
  stroke(30);
  fill(229, 110, 159, 50);
  ellipse(but.left.x, but.left.y, but.left.r * 2, but.left.r * 2);
  fill(130, 180, 229, 50);
  ellipse(but.right.x, but.right.y, but.right.r * 2, but.right.r * 2);
}

function changeBg(step) {
  bgNow += step;
  if (bgNow >= linksbg.length) bgNow = 0;
  else if (bgNow < 0) bgNow = linksbg.length - 1;

  bgs[bgNow] = loadImage(linksbg[bgNow]);
}

function Thing(x, y, w, h, imgIndex) {
  this.img = imgIndex;
  this.pos = createVector(x, y);
  this.size = createVector(w, h);
  this.vel = createVector(0, 0);
}

function updateThing(t) {
  t.pos.add(t.vel);

  if (mouseIsPressed) {
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, width / 10, width / 10);

    var d = p5.Vector.dist(createVector(mouseX, mouseY), t.pos);
    if (d < width / 20 + t.size.x) {
      t.pos = createVector(mouseX, mouseY);
    } else {
      t.vel.add(random(-.5, .5), random(-.1, 0));
    }
  } else {
    t.vel.add(random(-.5, .5), random(-.1, 0));
  }

  if (t.pos.y < 0) {
    t.pos.y = height + t.size.y;
    t.pos.x = width / 2;
    t.vel = createVector(0, 0);
  }
  if (t.pos.x > width || t.pos.x < 0) {
    t.vel.x *= -0.5;
    t.vel.y *= -0.1
    if (t.pos.x > width) t.pos.x = width;
    else t.pos.x = 0;
  }
}

function showThing(t) {
  if (images[t.img]) {
    push();
    translate(t.pos.x, t.pos.y);
    image(images[t.img], -t.size.x / 2, -t.size.y / 2, t.size.x, t.size.y);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, true);
  but = {
    left: {
      x: 100,
      y: height - 100,
      r: 30
    },
    right: {
      x: width - 100,
      y: height - 100,
      r: 30
    }
  };
}


// ============================================
var countDownDate = new Date("October 4, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  countDown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);