import clientPromise from '@/lib/db';
import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const client = await clientPromise;
  return client;
};
export const insertDocument = async (
  client: MongoClient,
  dbName: string,
  collection: string,
  document:
    | {
        name: string | null;
        email: string;
        comment: string | null;
        eventId: string | null;
      }
    | any
) => {
  const db = client.db(dbName);
  const result = await db.collection(collection).insertOne(document);
  return result;
};
export const getAllComments = async (
  client: MongoClient,
  dbName: string,
  collection: string,
  sort = {},
  filter = {}
) => {
  const db = client.db(dbName);
  const comments = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return comments;
};
