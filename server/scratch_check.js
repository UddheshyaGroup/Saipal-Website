import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import GalleryAlbum from './models/GalleryAlbum.js';

dotenv.config();

const run = async () => {
  await connectDB();
  const albums = await GalleryAlbum.find({});
  console.log("ALBUMS IN DB:");
  console.log(JSON.stringify(albums, null, 2));
  await mongoose.disconnect();
};

run();
