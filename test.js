const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const { Hash } = require('crypto');
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static("frontend"))
const path = require('path');
const cors = require('cors');
const ejs = require('ejs');
app.use(cors()); // Enable CORS for all routes


// Set 'ejs' as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Database
const database = module.exports= () =>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try{
        mongoose.connect("mongodb+srv://kabaibrahima198:sli5Wg1hJQGGzcT2@cluster0.d284f88.mongodb.net/worldamovieDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connection successfully")
    } catch(error){
        console.log(error)
        console.log("Database connection failed")
    }
}
database();
//Var to store movie's name from user preferance to their watchlist
// var moviesTitlesFromUser=[]

const emailSchema= new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    movieName:Array
});
const Email = mongoose.model('Email', emailSchema);

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html")
})


app.post("/submit", async function (req, res){
    var emailAddress = req.body.email;
    var moviesTitlesFromUser = req.body.movieTittle;
    var movieTitles = req.body.movieSelection;
    try {
        const foundList = await Email.findOne({ email: emailAddress });
        if (!foundList) {
            // Create new database
            const email = new Email({
                email: emailAddress,
                movieName: movieTitles
            });
            await email.save();
        } else {
            foundList.movieName.push(moviesTitlesFromUser);
            foundList.movieName.push(movieTitles);
            await foundList.save();
        }
    } catch (err) {
        console.log(err);
    }    
    
    //console.log("Characters: " + moviesTitlesFromUser )
})


// Example API route to fetch movie data from the Movie Database API
app.get('/api/movies', async (req, res) => {
    try {
      const apiKey = '1e23e1cbe808fc398defed60deb63779';
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  
      const response = await axios.get(apiUrl);
      const movies = response.data.results;
      res.json(movies);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  });


// // New route to fetch all data from MongoDB and render display_data.html using ejs
// app.get('/display_data', async (req, res) => {
//     try {
//         const allData = await Email.find({});
//         // Render the display_data.ejs page and pass the fetched data as a variable to it
//         res.render('display_data', { data: allData });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Error fetching data' });
//     }
// });

// New route to fetch all data from MongoDB and render display_data.html using ejs
app.post('/displayList', async (req, res) => {
    try {
        const allData = await Email.find({});
        // Render the display_data.ejs page and pass the fetched data as a variable to it
        res.render('display_data', { data: allData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching data' });
    }
});


  

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

