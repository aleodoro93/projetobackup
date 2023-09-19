import mongoose from "mongoose";
import {config} from "dotenv";

 
config()

async function connect(){
const USER_DB = process.env.USER_DB
const DATABASE = process.env.DATABASE
const PASSWORD = process.env.PASSWORD
const CLUSTER = process.env.CLUSTER

await mongoose.connect(`mongodb+srv://${USER_DB}:${PASSWORD}@${CLUSTER}.${DATABASE}.mongodb.net/?retryWrites=true&w=majority`).then(()=> console.log("conectado ao mongo db"))
.catch((error)=> console.log(error));
}

export default connect;