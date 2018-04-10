
		var png = []; 
		var fbo;
		var seriously, src, target;
		var mirror, exposure;

		for (var i = 0; i < 1; i++) {
		    png[i] = new PNG();
		}
		function preload(){

		  for (var i = 0; i < 1; i++) {
		        png[i].init(160, "../../assets/png/");

		    }
		}
		function setup() {
 		  
 		  frameRate(60);
		  rectMode(CENTER);

		 //windowWidth,windowHeight
		 let w,h;
		 w = 320;
		 h = 240;
		 var canvas = createCanvas(w,h, WEBGL);
		 canvas.id('p5canvas');

		  fbo = createGraphics(w,h);
		  fbo.id('p5render');
		  //fbo.show(); 


		  seriously = new Seriously(); 
		  src = seriously.source('#p5render'); 
		  target = seriously.target('#p5canvas');
	  
		  mirror = seriously.effect('mirror');
		  mirror.amount = 0.3;
		  mirror.source = src;

		  exposure = seriously.effect('exposure');
		  //exposure.exposure = 9.0; //-9.0-9.0
		  exposure.source = mirror

  		  target.source = exposure;
  		  seriously.go();
 		  background('black');

		   
		}

		function draw() {

			let v = map(bleepEnvelope.value,0.1, 0.2, -9, -7.5);
			exposure.exposure = v;

			fbo.background('black'); //refresh background

		  	for (var i = 0; i < 1; i++) {
				png[i].animate();
				fbo.image(png[i].draw(),0,0);

		  	}
		
		  	// fbo.fill(random(255), random(255),0);
		  	// fbo.ellipse(mouseX,mouseY,200,200);

		  	//Seriously JS Update//
		  	src.update();
		}