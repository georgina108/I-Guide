const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const client = new textToSpeech.TextToSpeechClient(
);


app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/quotes', function(req,res){
  axios.get('http://api.forismatic.com/api/1.0/', {
    params: {
      method: 'getQuote',
      format:'json', 
      lang: 'en'
    }
  })
  .then(function(response) {
    var quote = response.data
    console.log(quote)
    res.send(quote)
  })
  .catch(function(error){
    console.log(error)
  })
})

app.get('/api/music', function(req,res){
  axios.get('https://api.jamendo.com/v3.0/playlists/tracks', {
    params: {
      client_id: 	'0e52e00b',
      name: 'Meditation',
      track_type:"single"
    }
  })
  .then(function(response) {
    res.send(JSON.stringify(response.data))
  })
  .catch(function(error){
    console.log(error)
  })
})

var text = '';
const outputFile = path.join(__dirname, '../client/output.mp3')
app.post('/api/postaudio', function(req,res){
  console.log(req.body.params)
   text = req.body.params
  const request = {
    input: {text: text},
    voice: {languageCode: 'es-ES', ssmlGender: 'FEMALE' },
    audioConfig: {audioEncoding: 'MP3', speakingRate:'0.6',"pitch": "-2.80"},
  };

  client.synthesizeSpeech(request, (err, response) => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }

    fs.writeFile(outputFile, response.audioContent, 'binary', err => {
      if (err) {
        console.error('ERROR:', err);
        return;
      }
      console.log(`Audio content written to file: ${outputFile}`);
      res.end('success')
    });
  });
  
})

app.listen(8000, () => {console.log('listening to port 8000')})
