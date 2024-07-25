const express = require("express"); //api server

const app = express();
app.use(express.json());

//connect to db
//const { MongoClient, ServerApiVersion } = require('mongodb'); //to connect to db
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); //to connect to db
const uri = "mongodb+srv://best:123456best@myfirstdb.txtryft.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDB";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//connect to db

app.post("/addBook", async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const imgName = req.body.imgName
    const price = req.body.price
    const tags = req.body.tags

    //
    const database = client.db("actuallyFirstDB");
    const bookShelf = database.collection("BookShelf");
    // Create a document to insert
    const query = {
      title: title,
      description: description,
      imgName: imgName,
      price: price,
      tags: tags
    }
    
    try{
        const result = await bookShelf.insertOne(query);
        res.status(200).json({
            status: "success"
        });
    }
    catch(err){
        console.log(err)
        res.status(401).json({
            status: "fail: not enough data"
        });
    }
});

app.get("/searchBook", async (req, res) => {
  const { title } = req.query;
  const books = client.db("actuallyFirstDB").collection("BookShelf");
  const query = { title: title };
  const options = {
    sort: { title: 1 },
    projection: {
      _id: 0
    }
  };

  try {
    if ((await books.countDocuments(query)) === 0) {
      throw new Error("No documents found!");
    }

    const cursor = await books.find(query, options).toArray();
    res.status(200).json({
      status: "success",
      books: cursor
    });

  } catch (err) {
    console.log(err)
    res.status(401).json({
      status: "fail",
      error: err
    });
  }
});

app.listen(3000, () => {
    console.log("server start");
});

app.get("/deleteBook",async (req, res) => {
    const { id } = req.query;
    const books = client.db("actuallyFirstDB").collection("BookShelf");
    const query = { _id: new ObjectId(id)};
  
    try {
      await books.findOneAndDelete(query);
  
      res.status(200).json({
        status: "success",
      });
  
    } catch (err) {
      console.log(err)
      res.status(401).json({
        status: "fail",
        error: err
      });
    }
  })