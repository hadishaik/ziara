// import mongoose from "mongoose";

// export const connectMongoDB = async () => {
//   if (mongoose.connection.readyState === 1) {
//     return mongoose.connection.asPromise();
//   }

//   return await mongoose.connect(
//     "mongodb+srv://Hadishaik:ShaikHaji@cluster0.gtx5nnt.mongodb.net/admin-panel_DB?retryWrites=true&w=majority&appName=Cluster0"
//   );
// };

import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    console.log(
      mongoose.connection.readyState,
      "i am ready connect",
      process.env.MONGO_URL
    );
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    await mongoose.connect(process.env.MONGO_URL!);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
