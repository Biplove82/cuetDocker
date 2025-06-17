const express = require("express");
const mongoose = require("mongoose");
const cluster = require("cluster");

const app = express();
const route = require("../src/Routes/routes.js");

const cors = require("cors");
const { config } = require("dotenv");

config({
 path: "./.env"
});

app.use(cors({
  origin: "*", // <-- You already added this, but ensure it’s applied BEFORE routes
  methods: ["GET", "POST", "PUT","PATCH","DELETE"],
  allowedHeaders: ["Content-Type", "x-auth-token"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const db = process.env.DB_URL;


  app.use("/v1", route);

const startServer = async () => {
try {

  
  await mongoose.connect(db, {
  });
  console.log("Cuet database is connected");


//  app.use("/v1", routes);

  // Start the server
  app.listen(PORT, () => {
    console.log(`cuet app is running on port ${PORT}`);
  });


  process.on("SIGINT", () => {
    console.log("Gracefully shutting down...");
    mongoose.connection.close(() => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
} catch (err) {
  console.error("Failed to start server:", err);
  process.exit(1);
}
};

// Start the server
startServer();