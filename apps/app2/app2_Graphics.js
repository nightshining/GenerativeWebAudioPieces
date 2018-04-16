
		var dial = new Nexus.Dial('#dial')
		dial.colorize("accent","#FFFFFF")
		dial.colorize("fill","#333")


		function setup() {
 		  
 		  frameRate(60);

		 //windowWidth,windowHeight
		 let w,h;
		 w = 500;
		 h = 500;
		 var canvas = createCanvas(w,h);
		 canvas.id('p5canvas');
		   
		}

		function draw() {
		
		}

		 
	  dial.on('change',function(v) {
		
			fmSynth.harmonicity.value = v * 20;
		})