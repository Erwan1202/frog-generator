import { MongoClient, type MongoClientOptions } from 'mongodb';

// Use process.env for runtime Docker environment variables
const uri = process.env.MONGODB_URI || import.meta.env.MONGODB_URI;
const options: MongoClientOptions = {};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Please add your MongoDB URI to the .env file');
}

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;