
// var key = [49,50,51,52,32] //key '1','2','3','4','space'
// var scale = {49:'C3',50:'D3',51:'E3',52:'F3',32:'G3'}

// var sampler = new Tone.Sampler({
// 			'C3' : 'chord.[mp3|ogg]'
// 			//'D3' : 'tones.[mp3|ogg]',
// 			//'E3' : 'cymbal.[mp3|ogg]',
// 			//'F3' : 'piano.[mp3|ogg]',
//       //'G3' : 'synth.[mp3|ogg]',
// 		}, {
//       //'release' : 1,
//       'baseUrl' : 'assets/samples/'
//      }).toMaster();

//      sampler.send("reverb", -15)
//      sampler.send("delay", -8)

// var reverb = new Tone.Freeverb(0.5, 4000).receive("reverb").toMaster();
// var delay = new Tone.PingPongDelay(0.1, 0.5).receive("delay").toMaster();


// //window.addEventListener('keydown', function (e) {
    
//     sampler.triggerAttackRelease('C3')
// //})
const players = new Tone.Players({
  low: 'https://tonejs.github.io/examples/audio/casio/C2.mp3',
  high: 'https://tonejs.github.io/examples/audio/casio/A2.mp3',
}, () => {
  document.querySelector('#status').textContent = players.loaded
  players.get('low').start()
  players.get('high').start('+0.5')
}).toMaster()
