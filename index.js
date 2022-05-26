 const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine","ejs");
const mongoose = require('mongoose');
mongoose.connect("mongodb/localhost:27017/allmovies", { useUnifiedTopology:true})
.then(()=> console.log('Connected to Database '));

app.get('/',(req,res)=>{
     res.render('dashboard');
})

// Top movies 
const FindTopMovies = async () => { 
    return await TopMovies.find({});
  }

app.use('/topmovies',async (req,res,next)=>{

    const topMovies = await FindTopMovies()
    console.log(topMovies, 'Database providing data')
    res.render('topmovies', { records:topMovies, success:''})
         
        
    })


//Kids movies
const FindMovies = async ()  => {
     return await KidsMovies.find({});
  }


  app.use('/kidsmovies',async (req,res,next)=>{

     const test = await FindMovies()
          
          res.render('kidsMovies', { records:test, success:''})
  
          
         
     })
 
 





// All movies

const FindMovies = async ()  => {
     return await AllMovies.find({});
  }
  app.use('/allmovies',async (req,res,next)=>{

     const test = await FindMovies()
          
          res.render('allmovies', { records:test, success:''})
  
          
         
     })  





// server

app.listen(3000,()=>{
     console.log('server running on port 3000');
});
