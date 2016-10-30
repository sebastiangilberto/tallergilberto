var nodemailer = require('nodemailer');

/* GET 'direccion' page */
module.exports.direccion = function (req, res) {
  res.render('direccion', { title: 'Dónde estamos' });
};

/* GET 'home' page */
module.exports.home = function (req, res) {
  res.render('index', { title: 'Home' });
};

/* GET 'contacto' page */
module.exports.contacto = function (req, res) {
  res.render('contacto', { title: 'Contacto' });
};
/* POST 'contacto' page */
/*
module.exports.sendEmail = function (req, res) {
  // Not the movie transporter!
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sebastiananibalgilberto@gmail.com', // Your email id
      pass: 'asdqwe123' // Your password
    }
  });
  var mailOptions = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
    to: 'sebastiananibalgilberto@gmail.com',
    subject: 'Prueba Taller Gilberto',
    text: req.body.message,
  };
  console.log('From:' + mailOptions.from);
  console.log('to:' + mailOptions.to);
  console.log('text:' + mailOptions.text);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.render('contacto', {title: 'Contacto', msg: 'Error occured, message not sent.', err: true, page: 'contacto' })
    }
    //Yay!! Email sent
    else {
      res.render('contacto', {title: 'Contacto', msg: 'Message sent! Thank you.', err: false, page: 'contacto' })
    }
  });
}
*/