const { MongoClient, ServerApiVersion } = require('mongodb');
//-----show-----
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb+srv://best:123456best@myfirstdb.txtryft.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDB";

// const client = new MongoClient(uri);

// async function run() {
//   try {
    
//     // Get the database and collection on which to run the operation
//     const database = client.db("actuallyFirstDB");
//     const movies = database.collection("books");

//     // Query for a movie that has the title 'The Room'
//     const query = { username: "best" };

//     const options = {
//       // Sort matched documents in descending order by rating
//       sort: { "imdb.rating": -1 },
//       // Include only the `title` and `imdb` fields in the returned document
//       projection: { _id: 0, title: 1, imdb: 1 },
//     };

//     // Execute query
//     const movie = await movies.findOne(query);

//     // Print the document returned by findOne()
//     console.log(movie);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

//-----insert-----
//import { MongoClient } from "mongodb"; //error not lastest ver

// Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb+srv://best:123456best@myfirstdb.txtryft.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDB";

// // Create a new client and connect to MongoDB
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect to the "insertDB" database and access its "haiku" collection
//     const database = client.db("actuallyFirstDB");
//     const Users = database.collection("books")
//     Users.createIndex({ username: 1 }, { unique: true });
//     const result = await Users.insertOne({ username: "best3" , password: "564847"});
//     console.log(result);
//   } finally {
//      // Close the MongoDB client connection
//     await client.close();
//   }
// }
// // Run the function and handle any errors
// run().catch(console.dir);


//-----update/change-----

// Update a document

//import { MongoClient } from "mongodb"; //error not lastest ver

// Replace the uri string with your MongoDB deployment's connection string
// const uri = "mongodb+srv://best:123456best@myfirstdb.txtryft.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDB";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db("actuallyFirstDB");
//     const movies = database.collection("books");

//     // Create a filter for movies with the title "Random Harvest"
//     const filter = { username: "best2" };

//     /* Set the upsert option to insert a document if no documents match
//     the filter */
//     const options = { upsert: true };

//     // Specify the update to set a value for the plot field
//     const updateDoc = {
//       $set: {
//         password: "11111111111111111"
//       },
//     };

//     // Update the first document that matches the filter
//     const result = await movies.updateOne(filter, updateDoc, options);
    
//     // Print the number of matching and modified documents
//     // console.log(
//     //   `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//     // );
//   } finally {
//     // Close the connection after the operation completes
//     await client.close();
//   }
// }
// // Run the program and print any thrown errors
// run().catch(console.dir);


//-----delete-----

// Delete a document

//import { MongoClient } from "mongodb"; //error

// Replace the uri string with your MongoDB deployment's connection string
const uri = "mongodb+srv://best:123456best@myfirstdb.txtryft.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDB";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("actuallyFirstDB");
    const movies = database.collection("books");

    /* Delete the first document in the "movies" collection that matches
    the specified query document */
    const query = { username: "best3" };
    const result = await movies.deleteOne(query);

    /* Print a message that indicates whether the operation deleted a
    document */
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } finally {
    // Close the connection after the operation completes
    await client.close();
  }
}
// Run the program and print any thrown exceptions
run().catch(console.dir);
