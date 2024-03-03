"use client"
import { motion } from 'framer-motion';
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

export default function Gallery() {
  return (
    <div>
      <motion.h1 
        className="text-4xl font-bold text-center my-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-500 to-blue-500 font-roboto"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Gallery
      </motion.h1>
      <PhotoAlbum photos={photos} layout="masonry" />
    </div>
  );
}