import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const backImages = [
  'https://i.ytimg.com/vi/3nhKMcPpVSM/maxresdefault.jpg',
  'https://i.ytimg.com/vi/QZbuj3RJcjI/maxresdefault.jpg',
  'http://images6.fanpop.com/image/photos/41200000/Meditation-josepinejackson-41205534-500-333.jpg',
  'http://hdwpro.com/wp-content/uploads/2017/11/Top-Beach-Background.jpg',
  'https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?cs=srgb&dl=landscape-nature-water-68147.jpg&fm=jpg',
  'http://s1.picswalls.com/wallpapers/2014/08/08/iceland-background_02050943_163.jpeg',
  'https://s-media-cache-ak0.pinimg.com/originals/12/56/76/125676f90eb0f661b6b4f0eabf977ff1.jpg',
  'https://media.gettyimages.com/photos/christmas-lights-defocused-background-bokeh-gold-blue-picture-id613518332?b=1&k=6&m=613518332&s=612x612&w=0&h=2LpLo3SDBYEFA3z1AF0sNW25xlyajEpRJqUJPb-AQVA=',
  'http://backgroundcheckall.com/wp-content/uploads/2017/12/relaxing-background-images-6.jpg'
]
const Box = styled.div`
  display:flex;
  flex-direction:row;
  width: 100%;
  height: 1000px;
`;
const DesignBar = styled.div`
  width: 20%;
  margin-left:3%
  height: 500px;
  display:flex;
  flex-direction:column;
  text-align: center;
  flex-wrap: nowrap;
  border: 1px solid #D3D3D3;
  font-family: 'Comfortaa', cursive;
`
const Palette = styled.div `
 border: 1px solid #D3D3D3;
 width: 70%;
`;

const Palette2 = styled.div `
 border: 1px solid #D3D3D3;
 width: 70%;
 color: green;
 font-size:20px;
`;


const Begin = styled.div`
  padding-top:20px;
  width: 100%;
  height:60px
  border:1px solid #D3D3D3;
`;

const Music = styled.div`
  width: 100%;
  padding-top:20px;
  height: 50px;
  border:.5px solid #D3D3D3;
`;
const Voice = styled.div`
  width: 100%;
  padding-top:20px;
  height: 50px;
  border:.5px solid #D3D3D3;
  background-color: #EEF0EA;
`;
const Background = styled.div`
  width: 100%;
  padding-top:20px;
  height: 50px;
  border:.5px solid #D3D3D3;
  background-color: #EEF0EA;
`;
const Timer = styled.div `
  width: 100%;
  padding-top:20px;
  height: 50px;
  border:.5px solid #D3D3D3;
  background-color: #EEF0EA;
`;
const Panda = styled.img`
  border-radius: 50%;
  position:relative;
  width:215px;
  height:200px;
  margin-top:20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SmallPanda = styled.img`
  border-radius: 50%;
  width:80px;
  height:70px;
  margin-left:30%;
  position:relative;
  margin-top:20%;
  transform: translate(-50%, -50%);
`;
const Inspiration = styled.div `
  width: 100%;
  height:300px;
  padding:10px;
  vertical-align:middle;
  color: black;
  background-color: white;
  border:.5px solid #5F9EA0;
`;
const  P = styled.p `
 margin-left:3%;
 margin-top: 0%
 text-align:center;
`;
const MusicChoices = styled.div`
  display: flex;
  flex-direction: rows;
`
const Track = styled.div`
  display: flex;
  flex-direction: column;
`
const Images = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
`
const Musicmsg = styled.div`
  margin-top: 50px;
  width: 50%;
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  border-bottom:1px solid #D3D3D3;
  margin-left: 20%
`
const MusicImg = styled.img`
  margin-top: 30px;
  border-radius:100%;
  width: 120px;
  height:120px;
`

const Musicaudio = styled.audio`
  width: 100px;
  height:60x;
  background-color: red;
  margin-left: 20%
`
const TrackInfo = styled.div` 
 display:flex;
 margin-top:50px;
 margin-left:60px;
 flex-direction:column;
 margin-left:20px;
 width: 200px;
 font-size:14px;
`
const Para = styled.p`
  margin-left:40px;
  margin-top:5px;
`
const Voicemsg = styled.div`
  margin-top: 50px;
  width: 50%;
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  border-bottom:1px solid #D3D3D3;
  margin-left: 20%
`

const VoiceInner = styled.div`
  margin-top: 20px;
  font-size: 18px;
 
`

const Form = styled.form`
  display: flex;
  flex-direction: rows;
 
`
const Input = styled.input`
 margin: 40px;
 left: 30%;
 text-size:14px
 padding-left: 30px;
 width: 600px;
 height: 200px;
 background: 
`
const TextButton = styled.div`
  margin-top: 80px;
  margin-left: 20px;
  padding:15px;
  padding-top:30px;
  border-radius: 20%;
  height: 50px;
  color: white;
  background-color: green;
 
`
const Backgroundmsg = styled.div`
  margin-top: 50px;
  width: 50%;
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  border-bottom:1px solid #D3D3D3;
  margin-left: 20%
`
const Backdrops= styled.table`
  margin-top: 50px;
  margin-left: 15%;
  border:1px solid #D3D3D3;
`
const B1= styled.td`
  border:1px solid #D3D3D3; 
  width: 230px;
  height:200px;
`
const Img1= styled.img`
  width: 230px;
  height:200px;
`
const MovieAudio= styled.audio`
  visibility: hidden;
`

const Completemsg = styled.div`
  margin-top: 50px;
  width: 50%;
  font-size: 24px;
  padding-bottom: 50px;
  text-align: center;
  border-bottom:1px solid #D3D3D3;
  margin-left: 20%
`
const Library = styled.div` 
  height: 60px;
  display:flex;
  flex-direction:column;
  width:100%;
  padding-top: 20px;
  margin-right: 50px;
  margin-top: .3%;
  color: white
  background-color: grey;
`
const Movie= styled.audio` 
  height: 500px;
  width:700px;
  margin-top: -43%;
  margin-left:15%
`
const Playerimg= styled.img` 
  height: 500px;
  width:700px;
  margin-left:15%
`
const Completion= styled.div` 
 display:flex;
 flex-direction:column;
`
const LibraryBar= styled.div` 
  margin-top:20px;
  padding-top:20px;
  padding-bottom:15px;
  color: black;
  height: 100px
 background-color:	#F0F0F0;
 line-height: 30px;
 

`
class App extends React.Component {
    constructor() {
      super()
      this.state = {
        begin:false,
        music:false, 
        voice:false,
        backgrounds:false,
        timer:false,
        musicColor:{'background-color':'#EEF0EA','color':'black'},
        voiceColor:{'background-color':'#EEF0EA','color':'black'},
        backgroundsColor: {'background-color':'#EEF0EA','color':'black'},
        timerColor:{'background-color':'#EEF0EA','color':'black'},
        designBarColor:{'background-color':'green'},
        quote: {quoteText:'just breath.', quoteAuthor:''},
        tracks: null,
        audio: null,
        choosenMusic: null, 
        choosenVoice: null, 
        chooseBackground: null,
        value: null,
        library:false, 
        images:backImages
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
    axios.get('/api/music')
     .then(function(response) {
       var data = response.data.results.slice(1)
       data.pop();
       console.log(data)
       self.setState({
         tracks:data
       })
     })
     .catch(function(error){
       console.log(error)
     })
  }
  
  getText(e){
    this.setState({
      value: e.target.value
    })
  }

  generateAudio(){
    var self = this;
    axios.post('/api/postaudio', {
      params: this.state.value
    })
     .then(function(response) {
       console.log('success')
     })
     .catch(function(error){
       console.log(error)
     })
  }

  changeLibrary(){
    if(this.state.library){
      this.setState({
        library:false
      })
    } else{
      this.setState({
        library:true
      })
    }
  }

  showDesignBar(){
    if(this.state.begin){
      this.setState({
        begin:false, 
        music:false,
        voice:false,
        backgrounds:false,
        timer:false
      })
    } else {
      this.setState({
        begin:true
      })
    }
   }

 showMusicChoices(){
  if(this.state.music){
    this.setState({
      music:false,
      musicColor:{'background-color':'#EEF0EA','color':'black'}
    })
  } else {
    this.setState({
      music:true,
      musicColor:{'background-color':'red','color':'white'},
      voice:false,
      backgrounds:false,
      timer:false,
      voiceColor:{'background-color':'#EEF0EA','color':'black'},
      backgroundsColor: {'background-color':'#EEF0EA','color':'black'},
      timerColor:{'background-color':'#EEF0EA','color':'black'}
    })
  }
 }
  
  showVoiceChoices(){
    if(this.state.voice){
      this.setState({
        voice:false,
        voiceColor:{'background-color':'#EEF0EA','color':'black'}
      })
    } else {
      this.setState({
        voice:true,
        voiceColor:{'background-color':'red','color':'white'},
        music:false,
        backgrounds:false,
        timer:false,
        musicColor:{'background-color':'#EEF0EA','color':'black'},
        backgroundsColor: {'background-color':'#EEF0EA','color':'black'},
        timerColor:{'background-color':'#EEF0EA','color':'black'}
      })
    }
   }
  
   showBackgroundChoices(){
    if(this.state.backgrounds){
      this.setState({
        backgrounds:false,
        backgroundsColor: {'background-color':'#EEF0EA','color':'black'}
      })
    } else {
      this.setState({
        backgrounds:true,
        backgroundsColor:{'background-color':'red','color':'white'},
        music:false,
        voice:false,
        timer:false,
        musicColor:{'background-color':'#EEF0EA','color':'black'},
        voiceColor:{'background-color':'#EEF0EA','color':'black'},
        timerColor:{'background-color':'#EEF0EA','color':'black'}
      })
    }
   }
   showTimerChoices(){
    if(this.state.timer){
      this.setState({
        timer:false,
        timerColor:{'background-color':'#EEF0EA','color':'black'}
      })
    } else {
      this.setState({
        timer:true,
        timerColor:{'background-color':'red','color':'white'},
        music:false,
        voice:false,
        backgrounds:false,
        musicColor:{'background-color':'#EEF0EA','color':'black'},
        voiceColor:{'background-color':'#EEF0EA','color':'black'},
        backgroundsColor: {'background-color':'#EEF0EA','color':'black'}
      })
    }
   }

  chooseBackdrop(value) {
   this.setState({chooseBackground: backImages[value]})
  }

  chooseMusicTrack(value){
    this.setState({
      choosenMusic: this.state.tracks[value].tracks[0].audio
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
      <Box >
        <DesignBar >
          {this.state.begin ? 
          <div>
            <Begin  className='pointer'onClick={this.showDesignBar.bind(this)}>Meditation Palette</Begin> 
            <Music  className='pointer'onClick={this.showMusicChoices.bind(this)} style={this.state.musicColor}>Music</Music>
            <Voice  className='pointer'onClick={this.showVoiceChoices.bind(this)} style={this.state.voiceColor}>Voice</Voice>
            <Background  className='pointer'onClick={this.showBackgroundChoices.bind(this)} style={this.state.backgroundsColor} >Background</Background>
            <Timer  className='pointer'onClick={this.showTimerChoices.bind(this)} style={this.state.timerColor}>Complete!</Timer>
            <div> <SmallPanda src='panda.png'/></div>
            {this.state.library ? 
           <Library  className='pointer'onClick={this.changeLibrary.bind(this)}>
            <div>Your Library</div>
            <LibraryBar>Playlist_id:3<br/>Playlist_id:4<br/>Playlist_id:5</LibraryBar>
          </Library> : 
          <Library className='pointer' onClick={this.changeLibrary.bind(this)}>Your Library </Library>}
           </div> :
           <div>
           <Begin  className='pointer'onClick={this.showDesignBar.bind(this)} >Create your Meditation</Begin> 
           {this.state.library ? 
           <Library  className='pointer'onClick={this.changeLibrary.bind(this)}>
            <div>Your Library</div>
            <LibraryBar></LibraryBar>
          </Library> : 
          <Library className='pointer' onClick={this.changeLibrary.bind(this)}>Your Library </Library>}
           </div>

          }
           
        </DesignBar>
      {this.state.begin ? 
       <Palette>
        {this.state.music ? 
        <div>
          <Musicmsg>Choose your favorite meditation music. </Musicmsg>
          <MusicChoices>
            <Images>
              {this.state.tracks && this.state.tracks.map((track,h) => (
                
                  <MusicImg onClick={this.chooseMusicTrack.bind(this, h)} className='pointer' key={h} src={track.tracks[0].album_image}></MusicImg>
            
              ))
              }  
            </Images>
            <Track>
              {this.state.tracks && this.state.tracks.map((track, g) => (
                <TrackInfo onClick={this.chooseMusicTrack.bind(this, g)}>
                  <Para><strong>{track.tracks[0].name}</strong> <br/>{track.tracks[0].artist_name}</Para>
                  <Musicaudio className='pointer' key={g} controls>
                    <source  src={track.tracks[0].audio} type="audio/mp3"/>
                  </Musicaudio>
                </TrackInfo>
              ))
              }
            
            </Track>
          </MusicChoices> 
        </div>
        : <div></div> }
        {this.state.voice ?
         <div>
          <Voicemsg>
            <strong>What would you like to hear during meditation?</strong><br/>
            <VoiceInner>Write whatever you'd like, and we will turn it into a soothing audio guide for you</VoiceInner>
          </Voicemsg>
          <Form>
            <div>
              <Input type="text" placeholder='just breathe.' onChange={this.getText.bind(this)}/>
            </div>
            <div>
              <TextButton className='pointer' onClick={this.generateAudio.bind(this)}>generate audio</TextButton>
            </div>
          </Form>
          {this.state.audio ? 
          <audio className='pointer' controls>
           <source src="output.mp3" type="audio/mp3"/>
          </audio>
          : <div></div>
          }
          
        </div>
        :
        <div></div>
        }
        {this.state.backgrounds ? 
        <div>
          <Backgroundmsg>
          Choose a background
          </Backgroundmsg>
          <Backdrops>
            <tbody>
              <tr>
                {this.state.images.slice(0,3).map((image, i) => (
                 <B1><Img1 key={i} onClick={this.chooseBackdrop.bind(this,i)} className='pointer' src={image}/></B1>
                ))}
              </tr>
              <tr>
                {this.state.images.slice(3,6).map((image, i) => (
                 <B1><Img1 key={i} onClick={this.chooseBackdrop.bind(this,i + 3)} className='pointer' src={image}/></B1>
                ))}
              </tr>
              <tr>
                {this.state.images.slice(6,9).map((image, i) => (
                 <B1><Img1 key={i} onClick={this.chooseBackdrop.bind(this,i + 6)} className='pointer' src={image}/></B1>
                ))}
              </tr>
            </tbody>
          </Backdrops>
        </div> : <div></div> }
        {this.state.timer ? 
          <Completion>
            <Completemsg>Now, we meditate</Completemsg>
            <Playerimg src={this.state.chooseBackground}></Playerimg>
            <Movie controls autoPlay>
              <source className='pointer' src={this.state.choosenMusic} ></source> 
            </Movie>
            <MovieAudio controls autoPlay>
              <source className='pointer' src='output.mp3' type="audio/mpeg"></source>
            </MovieAudio>
          </Completion> : <div></div> }
       </Palette> 
       :
       <Palette2><div>
         <Panda src='panda.png'/>
        <P><strong>How do you like to meditate?</strong>
        <br/>Create your own meditation guide. Click on the left-hand bar to begin!</P>
       </div>
       </Palette2>
      }
      </Box>
   ) 
 }
}
export default App;
