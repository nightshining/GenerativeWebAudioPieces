//TONEJS//


		//KICK
		// var kickEnvelope = new Tone.AmplitudeEnvelope({
		//     "attack": 0.01,
		//     "decay": 0.1,
		//     "sustain": 0,
		//     "release": 0
		// }).toMaster();

		// var kick = new Tone.Oscillator("A2").connect(kickEnvelope).start();

		// kickSnapEnv = new Tone.FrequencyEnvelope({
		//     "attack": 0.005,
		//     "decay": 0.01,
		//     "sustain": 0,	
		//     "release": 0,
		//     "baseFrequency": "C2",
		//     "octaves": 2.6
		// }).connect(kick.frequency);

		// var kickPart = new Tone.Part(function(time){
		// 	kickEnvelope.triggerAttack(time);
		// 	kickSnapEnv.triggerAttack(time);
		// }, ["0", "0:0:3", "0:2:0", "0:3:2"]).start(0);


	  //Tone js Instruments//
	var arrayOsc = [];
	var totalOsc = 5;
	var notesOsc = ['C2', 'F4', 'G3', 'A3', 'C4'];
	var typeOsc = ['triangle', 'sine', 'sawtooth6'];
	var pannerOsc = [];

	//Tone js Effects//
	  var reverb = new Tone.Freeverb(0.95, 4000).receive("reverb").toMaster();
	  var dist = new Tone.Distortion(0.1).connect(reverb);

	 // var delay = new Tone.FeedbackDelay(0,0.75).receive("delay").connect(reverb);

		for (var i = 0; i < totalOsc; i++) {

			pannerOsc[i] = new Tone.PanVol();

			arrayOsc[i] = new Tone.Oscillator({
						"type" : typeOsc[Math.floor(Math.random() * typeOsc.length)],
						"frequency" : notesOsc[Math.floor(Math.random() * notesOsc.length)],
						"volume" : -10
					}).chain(pannerOsc[i],dist);

			arrayOsc[i].start();	
		}
		
		Tone.Master.volume.value =	 -20;
		Tone.Transport.stop();
		


	  //Tone js Transport//
	  //Tone.Master.volume.value = -20;
	  //Tone.Master.bpm = 160;

	  //Logic//

	  //Tone.Transport.start(0);


		