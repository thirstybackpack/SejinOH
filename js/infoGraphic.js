			let pts = [];
			var i = 0;
			var pg;
			var theta = 0;

			function setup() {
			  createCanvas(windowWidth, windowHeight);
			  background(86, 190, 178);
			  pixelDensity(2);
			  smooth();
			  pg = createGraphics(400, 400);
			  pts[0] = createVector(30, 30);
			  pts[1] = createVector(30, 200);
			  pts[2] = createVector(380, 200);
			  pts[3] = createVector(380, 380);


			}

			function windowResized() {
			  resizeCanvas(windowWidth, windowHeight);
			}

			function draw() {
			  rectMode(CENTER);
			  noStroke();
			  fill(86, 190, 178);
			  rect(width / 2, height / 2, width, height);
			  //			pts[0] = createVector(random(50, 350), random(50, 350));
			  //			pts[3] = createVector(random(50, 350), random(50, 350));

			  //			pts[1] = createVector(random(50, 350), random(50, 350));
			  //			pts[2] = createVector(random(50, 350), random(50, 350));
			  pts[1] = createVector(random(30, 380), random(30, 380));
			  pts[2] = createVector(random(30, 380), random(30, 380));
			  push();
			  translate(width / 2, height / 2);
			  //			rotate(theta);
			  imageMode(CENTER);
			  image(pg, 0, 0, width, height);
			  pop();
			  var numSeg = 500;
			  pg.strokeWeight(0.1);
			  pg.stroke(255,100);
			  pg.beginShape();
			  pg.noFill();
			  for (var i = 0; i < numSeg; i++) {
			    let amt = i / float(numSeg);

			    let q0 = p5.Vector.lerp(pts[0], pts[1], amt);
			    let q1 = p5.Vector.lerp(pts[1], pts[2], amt);
			    let q2 = p5.Vector.lerp(pts[2], pts[3], amt);

			    let r0 = p5.Vector.lerp(q0, q1, amt);
			    let r1 = p5.Vector.lerp(q1, q2, amt);

			    let s0 = p5.Vector.lerp(r0, r1, amt);
			    pg.vertex(s0.x, s0.y);
			    //ellipse(s0.x, s0.y, 1, 1);
			  }
			  pg.endShape();

			  pg.noStroke();
			  pg.fill(255, 100, 100);
			  pg.ellipse(pts[0].x, pts[0].y, 1, 1);
			  fill(255, 255, 200);
			  ellipse(pts[1].x, pts[1].y, 1, 1);
			  fill(200, 255, 255);
			  ellipse(pts[2].x, pts[2].y, 1, 1);
			  pg.fill(100, 100, 255);
			  pg.ellipse(pts[3].x, pts[3].y, 1, 1);

			  theta += 0.005;
			}