const mongoose=require('mongoose')

exports.connectDb=async()=>{
    try{
        const connect =await mongoose.connect(process.env.URI)
        console.log(
            "Database connected : ",
            connect.connection.host,
            connect.connection.name
          );
        } catch (err) {
          console.log(err);
          process.exit(1);
        }
}
// exports.connectDb = async () => {
//     try {
//       await mongoose.connect(process.env.DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         serverSelectionTimeoutMS: 5000,
//         autoIndex: true,
//         maxPoolSize: 10,
//         socketTimeoutMS: 45000,
//         family: 4,
//       });
  
//       // Ensure indexes for all collections
//       await mongoose.connection.syncIndexes();
  
//       console.log(`Mongodb connected with server: ${mongoose.connection.host}`);
//       // Seed data or start processing requests here
//     } catch (error) {
//       console.error("Error connecting to the database:", error);
//     }
//   };