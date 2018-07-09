const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(cors());
// app.use(function(req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// });

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
    res.send(quote)
  })
  .catch(function(error){
    console.log(error)
  })
})

app.post('/api/music', function(req,res){
  axios.get('https://api.spotify.com/v1/search', {
    params: {
    access_token:"BQARfVjtXQuB11PDRGypNmb_9KHh-98MP5EptxITE4fj4cj3Tx1uLaRC4NFDy_3_CENdREWpTg3uAIiTaOI", 
     q: 'guided meditation music',
     type:'track'
    }
  })
  .then(function(response) {
    console.log(response.data)
    res.send(response.data)
  })
  .catch(function(error){
    console.log(error)
  })
})

app.listen(4000, () => {console.log('listening to port 4000')})



  //curl -X "POST" -H "Authorization: Basic OGY2NDU2NjI0MjcyNDdhNzgwMWI2Mzc2MGM5ZGUzNDM6ZGU0NjIwOTc0ZmI1NDMzZWIyOTFmNWMzZGQ1NzY0YWY=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
  //{"access_token":"BQACw5-rAo5v8Ks4xlTN6GiUY8S5VOQxosG7IsGSqwJ9mqrILazfc-swz-sNfBafg8rRPfji875g0gFJJ8g","token_type":"Bearer","expires_in":3600,"scope":""}