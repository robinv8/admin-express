let fs = require('fs')
  , AipSpeechClient = require('../modules/aip-node-sdk-1.2.0/src/index').speech;

let APP_ID = "9590042";
let API_KEY = "4aFE8vOWhdllD7nXiYUltffa";
let SECRET_KEY = "ySDpaP5fABqruYjCOpghkrtc2pefDV7P";

let client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
let voice = fs.readFileSync('./temp/8k.amr');
let voiceBuffer = new Buffer(voice);

client.recognize(voiceBuffer, 'amr', 8000,{lan: 'zh'})
  .then((result) => {
    console.log('<recognize>: ' + JSON.stringify(result))
  }, (err) => {
    console.log(err)
  })
