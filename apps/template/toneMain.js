	//HATS

		//filtering the hi-hats a bit
		//to make them sound nicer
		// var lowPass = new Tone.Filter({
		//     "frequency": 14000,
		// }).toMaster();

		//we can make our own hi hats with 
		//the noise synth and a sharp filter envelope
		// var openHiHat = new Tone.NoiseSynth({
		// 	"volume" : -10,
		//     "filter": {
		//         "Q": 1
		//     },
		//     "envelope": {
		//         "attack": 0.01,
		//         "decay": 0.3
		//     },
		//     "filterEnvelope": {
		//         "attack": 0.01,
		//         "decay": 0.03,
		//         "baseFrequency": 4000,
		//         "octaves": -2.5,
		//         "exponent": 4,
		//     }
		// }).connect(lowPass);

		// var openHiHatPart = new Tone.Part(function(time){
		// 	openHiHat.triggerAttack(time);
		// }, ["2*8n", "6*8n"]).start(0);

		// var closedHiHat = new Tone.NoiseSynth({
		// 	"volume" : -10,
		//     "filter": {
		//         "Q": 1
		//     },
		//     "envelope": {
		//         "attack": 0.01,
		//         "decay": 0.15
		//     },
		//     "filterEnvelope": {
		//         "attack": 0.01,
		//         "decay": 0.03,
		//         "baseFrequency": 4000,
		//         "octaves": -2.5,
		//         "exponent": 4,

		//     }
		// }).connect(lowPass);

		// var closedHatPart = new Tone.Part(function(time){
		// 	closedHiHat.triggerAttack(time);
		// }, ["0*8n", "1*16n", "1*8n", "3*8n", "4*8n", "5*8n", "7*8n", "8*8n"]).start(0);

		// //BASS
		// var bassEnvelope = new Tone.AmplitudeEnvelope({
		//     "attack": 0.01,
		//     "decay": 0.2,
		//     "sustain": 0,
		//     "release": 0,
		// }).toMaster();

		// var bassFilter = new Tone.Filter({
		//     "frequency": 600,
		//     "Q": 8
		// });

		// var bass = new Tone.PulseOscillator("A2", 0.4).chain(bassFilter, bassEnvelope);
		// bass.start();

		// var bassPart = new Tone.Part(function(time, note){
		// 	bass.frequency.setValueAtTime(note, time);
		//     bassEnvelope.triggerAttack(time);
		// }, [["0:0", "A1"],
		// 	["0:2", "G1"],
		// 	["0:2:2", "C2"],
		// 	["0:3:2", "A1"]]).start(0);

		//BLEEP
		var bleepEnvelope = new Tone.AmplitudeEnvelope({
		    "attack": 0.01,
		    "decay": 0.5,
		    "sustain": 0.2,
		    "release": 0.4,
		}).toMaster();


		var bleep = new Tone.Oscillator({
			"type" : "triangle",
			"frequency" : "C2",
			"volume" : -10
		}).connect(bleepEnvelope);

		bleep.start();

		var bleepLoop = new Tone.Loop(function(time){
			 bleepEnvelope.triggerAttack(time);
		}, "16n").start(0);

		//KICK
		var kickEnvelope = new Tone.AmplitudeEnvelope({
		    "attack": 0.01,
		    "decay": 0.1,
		    "sustain": 0,
		    "release": 0
		}).toMaster();

		var kick = new Tone.Oscillator("A2").connect(kickEnvelope).start();

		kickSnapEnv = new Tone.FrequencyEnvelope({
		    "attack": 0.005,
		    "decay": 0.01,
		    "sustain": 0,	
		    "release": 0,
		    "baseFrequency": "C2",
		    "octaves": 2.6
		}).connect(kick.frequency);

		var kickPart = new Tone.Part(function(time){
			kickEnvelope.triggerAttack(time);
			kickSnapEnv.triggerAttack(time);
		}, ["0", "0:0:3", "0:2:0", "0:3:2"]).start(0);

		//TRANSPORT
		Tone.Transport.loopStart = 0;
		Tone.Transport.loopEnd = "1:0";
		Tone.Transport.loop = true;
		Tone.Transport.start("+0.1");


		