function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('Red', rSlider.x * 2 + rSlider.width, 35);
  text('Green', gSlider.x * 2 + gSlider.width, 65);
  text('Blue', bSlider.x * 2 + bSlider.width, 95);


C = 0

   noStroke()
    translate(windowWidth / 2, windowHeight / 2)
    S = 2 + abs(cos(C++/20))
      scale(S);
  rotate(PI / 4) 
  fill(S * 80, 0, 0)
  rect(-25, -25, 100, 100)
  rect(-25, -25, 100, 100) 
  circle(25, -25, 100) 
  circle(-25, 25, 100)
    }