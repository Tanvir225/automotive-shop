const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

//env
require('dotenv').config()

//test endpoint
app.get("/",(req,res)=>{
    res.send('welcome to automotive shop')
})




const uri = `mongodb+srv://${process.env.userDB}:${process.env.userPassword}@cluster0.ljq2tzl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //connect to database
    const listingCollection = client.db('automotiveDB').collection('listingCollection')

    //get all listings
    app.get('/listings',async(req,res)=>{
      const cursor = await listingCollection.find().toArray()
      res.send(cursor)
    })

    //post a listing
    app.post("/listings",async(req,res)=>{
      const listing = req.body
      console.log('post api hitting',listing);
      const result =await listingCollection.insertOne(listing)
      res.send(result)
    })
    
    
    
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  
  
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



//listen
app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
})