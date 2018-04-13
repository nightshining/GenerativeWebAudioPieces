
		var fbo;
		var time = 0;
		var speed = 0.0;
		var seriously, src, target;
		var effect;

		var dial = new Nexus.Dial('#dial')
		dial.colorize("accent","#FFFFFF")
		dial.colorize("fill","#333")
		document.body.style.backgroundColor = "#000"

		function setup() {
 		  
 		  frameRate(60);
		  rectMode(CENTER);

		 //windowWidth,windowHeight
		 let w,h;
		 w = 500;
		 h = 500;
		 var canvas = createCanvas(w,h, WEBGL);
		 canvas.id('p5canvas');

		  fbo = createGraphics(w,h);
		  fbo.id('p5render');
		  fbo.noStroke();
		  //fbo.show(); 


		   seriously = new Seriously(); 
		   src = seriously.source('#p5render'); 
		   target = seriously.target('#p5canvas');
	  	
	  	   effect = seriously.effect('noise');
		   effect.amount = 0.45;
		   effect.source = src;


	       target.source = effect;
	  	   seriously.go();


		   
		}

		function draw() {
		 
		//effect.time = time;

		fbo.background('black');
		var total = arrayOsc.length;
		var spacing = 50;
		  for(var i = 0; i < total; i++){
			
		    var x = sin(cos(radians(i*spacing))) * sin(time * 0.01) * mouseX + width * 0.5;
		    var y = cos(radians(i*spacing)) * cos(time * 0.01) * mouseY +  height * 0.5;
		    var w = sin(radians(time + i * spacing )) * 250;

		    w = spacing + abs(w);
		    
		    //Tone Interaction//
		    var vol = map(w,0, 250, -80, -20);
			arrayOsc[i].volume.rampTo(vol, 0.1);
			var pan = map(x,0, width, -1, 1, true);
		    pannerOsc[i].pan.value = pan;

		    var c = map(i,0,total,100,150);
		    fbo.stroke('black');
		    //fbo.noStroke();
		    fbo.fill(c);
		    fbo.ellipse(x, y, w, w);

		  }

		  //time++;	
		  time += speed;
		  src.update();
		}

		dial.on('change',function(v) {
			speed = v * 5.0;
		})