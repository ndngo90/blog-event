import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://loglivegoggle89:5r38wD7KSGOzGT4X@cluster0.2o5vskv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;
