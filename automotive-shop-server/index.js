const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//env
require("dotenv").config();

//test endpoint
app.get("/", (req, res) => {
  res.send("welcome to automotive shop");
});

const uri = `mongodb+srv://${process.env.userDB}:${process.env.userPassword}@cluster0.ljq2tzl.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a listings collection to database
    const listingCollection = client
      .db("automotiveDB")
      .collection("listingCollection");

    //create a cart collection to database
    const cartCollection = client
      .db('automotiveDB')
      .collection('cartCollection')

    //get all listings
    app.get("/listings", async (req, res) => {
      //filter data by brand query
      const brandQuery = req.query.brand;
      console.log(`Request for brand : ${brandQuery}`);

      let result;

      //check brandQuery
      if (brandQuery) {
        result = await listingCollection.find({ brand: brandQuery }).toArray();
      } else {
        result = await listingCollection.find().toArray();
      }

      res.send(result);
    });


    //featured Listing
    app.get("/listings/featured", async (req, res) => {
      const result = await listingCollection.find({ featured: true }).limit(5).toArray()
      res.send(result)
    })

    //popular listing
    app.get("/listings/popular", async (req, res) => {
      const result = await listingCollection.find({ type: "Liftback" }).limit(10).toArray()
      res.send(result)
    })

    //get all card
    app.get("/cart", async (req, res) => {
      const result = await cartCollection.find().toArray()
      res.send(result)
    })


   //get a single cart api
   app.get("/cart/:id",async(req,res)=>{
    const itemId = req.params.id
    console.log(itemId);
    const query = {_id : itemId}
    const result = await cartCollection.findOne(query)
    res.send(result)
   })

    //get a single listing
    app.get("/listings/:id", async (req, res) => {
      const listingId = req.params.id;
      console.log("single listing api hitting", listingId);
      const query = { _id: new ObjectId(listingId) };
      const result = await listingCollection.findOne(query);
      res.send(result);
    });

    //post a listing
    app.post("/listings", async (req, res) => {
      const listing = req.body;
      console.log("post api hitting", listing);
      const result = await listingCollection.insertOne(listing);
      res.send(result);
    });




    //post cart
    app.post("/cart", async (req, res) => {
      const cartItem = req.body
      const result = await cartCollection.insertOne(cartItem);
      res.send(result)
    })

    //delete a single listing from cart
    app.delete("/cart/:id",async(req,res)=>{
      const itemId = req.params.id
      console.log('delete api hitting',itemId);
      const query = {_id : itemId}
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//listen
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
