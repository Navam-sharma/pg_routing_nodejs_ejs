const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('now you are on index page');
  res.render('index');
});

router.get('/about', (req, res) => {
  console.log('now you are on about page');
  res.render('about');
});

router.get('/contact', (req, res) => {
  console.log('now you are on contact page');
  res.render('contact');
});

module.exports = router;
