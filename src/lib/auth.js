import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.AUTH_DB_URI;

if (!uri) {
  throw new Error("AUTH_DB_URI is missing");
}


const client = new MongoClient(uri);


let clientPromise = client.connect();

export const auth = betterAuth({
  database: mongodbAdapter(async () => {
    const connectedClient = await clientPromise;
    return connectedClient.db("skillSphere");
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});