'use strict'

import dotenv from "dotenv"
dotenv.config()

import { connectDB } from "./configs/mongo.js"

import { createDefaultPosts } from "./src/posts/posts.default.js"
createDefaultPosts()

import { initServer } from "./configs/app.js"

(async () => {
  try {
    await connectDB(); // Esperar a que la base de datos se conecte antes de levantar el servidor
    initServer(); // Inicializar el servidor Express solo si la BD está conectada
  } catch (err) {
    console.error(
      "❌ Error crítico en la inicialización de la aplicación:",
      err
    );
    process.exit(1); // Cerrar la aplicación si hay un error crítico
  }
})();