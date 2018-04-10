
var numFrames;  
var currentFrame = 0;
var img = [];


    function PNG() {}

    PNG.prototype.init = function(pngAmt, folderName) {
        numFrames = pngAmt; 
        for (var i = 0; i < numFrames; i++) {
          img[i] = loadImage(folderName + "PT_anim_" + nf(i, 5) + ".png");

        }
    }

    PNG.prototype.animate = function() {
        currentFrame = (currentFrame + 1) % numFrames;  
        //image(img[(currentFrame) % numFrames], 50,50);
    }

    PNG.prototype.draw = function() {
          return img[(currentFrame) % numFrames];
          
    }




 
