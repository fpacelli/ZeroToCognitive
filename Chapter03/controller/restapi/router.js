var express = require('express');
var router = express.Router();
var speech_to_text = require('./features/speech_to_text');

/* console.log('Siamo in router'); */
			
module.exports = router;
// speech-to-text
router.get('/api/speech-to-text/token*',speech_to_text.token);
