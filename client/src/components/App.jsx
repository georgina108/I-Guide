import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Box = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`;

const InnerBox = styled.div`
  display:flex;
  margin-top:300px;
  padding-top:20px;
  width:90%;
  text-align: center;
  height:30px;
  flex-wrap: nowrap;
  padding-left:40px;
  justify-content:space-between;
  position: absolute;
  top:8%;
`;
const Hero = styled.div`
  width: 100%;
  position:fixed;
`;
const Image = styled.img`
  width: 100%;
  position:fixed;
  height:100%;
`;
const DesignBar = styled.div`
  display:flex;
  margin-top:20px;
  position:absolute;
  width:50%;
  left:50%
  top:20%;
  transform: translate(-50%, -50%);
  text-align: center;
  height:30px;
  flex-wrap: nowrap;
  justify-content:space-around;
`;
const CreateButton = styled.button`
  margin-top:20px;
  position:absolute;
  width:20%;
  left:50%;
  height: 40px;
  background-color: teal;
  color: white;
  top:20%;
  transform: translate(-50%, -50%);
`;
const HomeButton = styled.button`
  margin-top:60%;
  margin-bottom:20%;
  position:absolute;
  width:30%;
  left:50%
  top:20%;
  background-color:yellow;
  transform: translate(-50%, -50%);
`;
const Palette = styled.div `
 margin-top: 545px;
 background-color: white;
 border: 1px solid black;
 position:absolute;
 width: 46%;
 height: 300px;
 left:47%
 right:50%;
 transform: translate(-50%, -50%);
`;

const Length = styled.div`
  width: 20%;
  background-color: #FFA500;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding-bottom: -3em;
`;
const Music = styled.div`
  width: 20%;
  background-color: #EEF0EA;
`;
const Voice = styled.div`
  width: 20%;
  background-color: #EEF0EA;
`;
const Background = styled.div`
  width: 20%;
  background-color: #EEF0EA;
`;
const Timer = styled.div `
  width: 20%;
  background-color: #EEF0EA;
`;
const Library = styled.div `
  width: 20%;
  height:30px;
  padding:10px;
  color:white;
  background-color: #5F9EA0;
`;
const Inspiration = styled.div `
  width: 20%;
  height:300px;
  padding:10px;
  vertical-align:middle;
  color: black;
  background-color: white;
  border:.5px solid #5F9EA0;
`;
const Quote = styled.div`
  font-size: 20px;
  font-style: italic;
  color: teal;
  margin: 20px;
`
const Author = styled.div`
font-size: 18px;
color: grey;
`

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        create: false,
        home: true, 
        quote: {quoteText:'just breath.', quoteAuthor:''}, 
        videos: [{external_urls: 'https://api.spotify.com/v1/tracks/3c68hPtXVdHCFiT3NjvOfK'}]
    }
  }
  componentDidMount () {
    this.getQuotes();
    this.getMusic();
  }
  getQuotes(){
    var self = this;
    axios.get('/api/quotes/')
     .then(function(response) {
        self.setState({
         quote: response.data
       })
     })
     .catch(function(error){
       console.log(error)
     })
  }
  getMusic(){
    var self = this;
    axios.post('/api/music/')
     .then(function(response) {
      console.log('this is the data back', response.data) 
      self.setState({
        videos: response.data.tracks.items
      })
      console.log(self.state.videos)
     })
     .catch(function(error){
       console.log(error)
     })
  }
  startCreation() {
    console.log('hello')
    this.setState({
      create:true,
      home: false
    })
  }
  
  returnToHomePage() {
    console.log('hello')
    this.setState({
      create:false,
      home: true
    })
  }

 render(){
   return (
    <Box>
      <Hero>
        <Image src="http://getwallpapers.com/wallpaper/full/4/c/e/609324.jpg" alt="meditation"/>
      </Hero>
      {this.state.create ? 
      <InnerBox> 
        <Library>
          Library
        </Library>
        <DesignBar>
        <Length>Length</Length>
        <Music>Music</Music>
        <Voice>Voice</Voice>
        <Background>Background</Background>
        <Timer>Timer</Timer>
        </DesignBar>
      <Inspiration>
        <Quote><strong>"</strong>{this.state.quote.quoteText}<strong>"</strong></Quote>
        <Author>-{this.state.quote.quoteAuthor}</Author> 
      </Inspiration>
      </InnerBox>
      : 
      <InnerBox>
        <CreateButton onClick={this.startCreation.bind(this)}>Let's begin creating!</CreateButton>
      </InnerBox>
      }
     
      {this.state.home ? '' : 
      <Palette>
       <audio src={this.state.videos[0].external_urls} allowFullScreen></audio>
        <HomeButton onClick={this.returnToHomePage.bind(this)}>HomePage</HomeButton>
        </Palette>  }
    </Box>
   )
   
 }
}

export default App;
