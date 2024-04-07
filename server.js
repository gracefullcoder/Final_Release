const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;
const Heroslider = require("./models/herosection.js");
const Booking = require("./models/booking.js");
const Countdown = require("./models/countdown.js");
const Workshop = require("./models/workshop.js");
const Specialslider = require('./models/specialsection.js');
const Testimonial = require('./models/testimonials.js');
const Event = require("./models/events.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

main()
  .then(() => {
    console.log("Connection was succesfull");
  })
  .catch(err => console.log(err));

async function main() {
  const connectionString = 'mongodb+srv://vaibhav:Svnit1103@koethecafe.8x5wmra.mongodb.net/';
  await mongoose.connect(connectionString);
}


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/', async (req, res) => {
  let heroSliders = await Heroslider.find();
  let countdown = await Countdown.find();
  let specialSection = await Specialslider.find();
  let testimonials = await Testimonial.find();
  let events = await Event.find();
  let allSection = { heroSliders, countdown, specialSection, testimonials, events };
  // console.log(allSection);
  res.render("index.ejs", { allSection });
});


app.post('/signup', async (req, res) => {
  try {
    const { userName, userEmail } = req.body;
    const user = await Workshop.find({ email: userEmail });
    if (user.length == 0) {
      const newRegistration = new Workshop({ name: userName, email: userEmail });
      await newRegistration.save();
      res.send({name: userName, status: "Your Registration is Successful!"});
    } else{
      res.send({name: userName, status : "Already Registered!"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// app.post('/adm', async (req, res) => {
//   if (req.body.n1 == 'akshat' && req.body.pass == 'cafe') {
//     const { n1, pass } = req.body;
//     console.log(req.body);
//     app.set('view engine', 'ejs');

//     Cafe.find({}).then((x) => { res.render('loged', { x }); });

//   } else {
//     res.send('<h1>incorrect</h1>');
//   }});

//   app.post('/adm2', async (req, res) => {
//     if (req.body.n1 == 'akshat' && req.body.pass == 'cafe') {

//       console.log(req.body);
//       app.set('view engine', 'ejs');

//       Booking.find({}).then((m) => { res.render('loged2', { m }); });

//     } else {
//       res.send('<h1>incorrect</h1>');
//     }
// });


// app.post('/del', async (req, res) => {

//   await Cafe.deleteOne({ n1: req.body.n1 });

//   console.log(req.body);
//   await Cafe.find({}).then((x) => { res.render('loged', { x }); });

// });


// app.post('/book', async (req, res) => {
//   await Booking.deleteOne({ name: req.body.n1 });
//   console.log(req.body);
//   await  Booking.find({}).then((m) => { res.render('loged2', { m }); });

// });

app.post('/', async (req, res) => {
  // const newCafe = new Cafe({ n1, email });
  //   await newCafe.save();
  const name = req.body.name;
  const phone = req.body.phone;
  const person = req.body.person;
  const time = req.body.time;
  const date = req.body.reservationdate;
  const message = req.body.message;
  const newbooking = new Booking({ name, phone, person, date, time, message });
  await newbooking.save();
  // console.log(req.body);
  const popupScript = `
    <script>
      alert("Yeah! ${name} Your Table is Booked!");
    </script>
  `;
  // res.send(popupScript);
  res.redirect("/");
});
