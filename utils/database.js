import mongoose from "mongoose";

let isConnected = false; // track the connection

// export const connectTODB = async () => {
//   mongoose.set("strictQuery", true);

//   if (isConnected) {
//     console.log("MongoDB is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "share-prompt",
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true;
//     console.log("Successfully connected to MongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };

export const connectTODB = async () => {
  console.log("Attempting to connect to MongoDB...");
  
  // mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share-prompt",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

