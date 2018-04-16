	//TONE JS//
	var bpm = 180;
	//KICK
	var kickEnvelope = new Tone.AmplitudeEnvelope({
	    "attack": 0.01,
	    "decay": 0.2,
	    "sustain": 0.1,
	    "release": 0.1
	}).toMaster();
	var kick = new Tone.Oscillator("A1").connect(kickEnvelope).start();
	var kickSnapEnv = new Tone.FrequencyEnvelope({
	    "attack": 0.5,
	    "decay": 0.1,
	    "sustain": 0,
	    "release": 0,
	    "baseFrequency": "C2",
	    "octaves": 2.7
	}).connect(kick.frequency);
	var kickPart = new Tone.Part(function(time){
		kickEnvelope.triggerAttack(time);
		kickSnapEnv.triggerAttack(time);
	}, ["0", "1:4"]).start(0);
	kickPart.loop = true;

	var freeverb = new Tone.Freeverb().toMaster();
	var synth = new Tone.PolySynth(8).connect(freeverb);
	
	synth.set({
		"filter" : {
			"type" : "highpass"
		},
		"envelope" : {
			"attack" : 0.05
		}
	});
	

	var fmSynth = new Tone.FMSynth({
		"harmonicity"  : 3,
		"modulationIndex"  : 10,
		"detune"  : 0,
		"oscillator"  : {
		"type"  : "sine"
			},
		"envelope"  : {
		"attack"  : 0.01 ,
		"decay"  : 0.01 ,
		"sustain"  : 1 ,
		"release"  : 0.5
		}  ,
		"modulation"  : {
		"type"  : "sine"
		}  ,
		"modulationEnvelope"  : {
		"attack"  : 0.05 ,
		"decay"  : 0 ,
		"sustain"  : 1 ,
		"release"  : 0.5
		}

	}).toMaster();
	

	MidiConvert.load("../../assets/midi/arpMelody.mid", function(midi) {

	  var midiPart = new Tone.Part(function(time,note) {

	    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
		fmSynth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
	  
	  }, midi.tracks[0].notes).start()

		  midiPart.loop = false;

		  Tone.Transport.bpm.value = bpm;
		  Tone.Transport.start();
	})


	  