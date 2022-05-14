const Twit = require("twit");
const dotenv = require("dotenv");
dotenv.config();

const express = require('express')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 5000

const T = new Twit({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

app.use(express.static('views'))
app.use('/css', express.static(__dirname + 'views/css'))
app.use('/img', express.static(__dirname + 'views/img'))

app.set('views', './views')
app.set("view engine", "ejs");


app.get ("/", function ( req, res ) 
	{
		res.render ( "home");		
	}
)

app.get ("/login", function ( req, res ) 
	{
		res.render ( "login" );		
	}
)

app.get ("/signup", function ( req, res ) 
	{
		res.render ( "signup" );		
	}
)

app.get ("/contact", function ( req, res ) 
	{
		res.render ( "contact" );		
	}
)

app.get ("/post", function ( req, res ) 
	{
		res.render ( "viewpost" );		
	}
)


app.post('/post', (req, res) => {
  const tweet = () => {
    const twit ="hello twitter #APItwitter";
  
    const onFinish = (err, reply) => {
      if (err) {
        console.log("Error: ", err.message);
      } else {
        console.log("Success: ", reply);
      }
    };
  
    T.post("statuses/update", { status: twit }, onFinish);
  };
  
  tweet();

  res.render ( "viewpost" );	
})


  app.listen(port, () => 
  console.log("Listen on port : ", port)
  )
