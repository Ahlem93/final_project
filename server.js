const express=require ('express')
const connectDB=require('./config/connectDB')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require ('path')
const app=express()
require ('dotenv').config()

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
connectDB()

app.use(bodyParser.json());

//API Route
app.use("/api/user/", require("./routes/User"));
// app.use("/api/profile/", require("./routes/Profile"));
app.use("/api/property/", require("./routes/Property"));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
const port=process.env.PORT || 5000
app.listen(port,(error)=>
    error 
    ? console.log(error)
    : console.log(`the server is running on ${port}`)
) 
