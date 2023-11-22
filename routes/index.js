var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const textToReplaceSubtitleWith = process.env.TEXT_TO_REPLACE_SUBTITLE_WITH || 'Default Subtitle Text';
  
  res.render('index', { subTitle: textToReplaceSubtitleWith, title: 'Hello World!' });
});

module.exports = router;