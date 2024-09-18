import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// import routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

const app = express();

// middleware used to make to diff. ports work together
app.use(cors());
// it will parse the data coming from the browser into a json format
app.use(express.json()); 

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        // we need to pass this parameter if we are using local mongodb
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error : ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/message", contactRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})