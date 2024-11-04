import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6728ea4f0026d68d3dcc"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
