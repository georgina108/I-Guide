const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');

const client = new textToSpeech.TextToSpeechClient()

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const text = "This breathing awareness relaxation script will guide you to focus on each stage of a breath as you breathe slowly and gently.Let's begin. Throughout this breathing awareness exercise, breathe in this way:Breathe in to the count of four, hold for the count of 3, and breathe out to the count of 5. It goes like this: Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...Continue to breathe at this slow pace.While you are breathing slowly, I'll direct your breathing awareness to different stages of the breath. Focus all of your attention on each stage I mention.First, notice the breath as it enters your nose. Notice each time you breathe in, the way the breath feels on your nostrils.Feel the breath as it passes through your nasal passages, and down behind your throat."
const outputFile = './output2.mp3';

const request = {
  input: {text: text},
  voice: {languageCode: 'en-US', ssmlGender: 'FEMALE'},
  audioConfig: {audioEncoding: 'MP3'},
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
  });
});