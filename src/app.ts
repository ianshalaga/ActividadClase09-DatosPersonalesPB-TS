import express from "express";
import handlebars from "express-handlebars";
import { rootPath, PORT } from "./utils/utils";
import viewsRouter from "./routes/views.route";

const app = express();

// Express.js server start
app.listen(PORT, () =>
  console.log(`Servidor de Express.js corriendo en el puerto: ${PORT}`)
);

// MIDDLEWARES
// Complex URLs format mapping
app.use(express.urlencoded({ extended: true }));
// Serves static files from public folder
app.use(express.static(`${rootPath}/public`));
// Format JSON requests to JavaScript Object format (POST / PUT)
app.use(express.json());

// Sets up Handlebars as the template engine for Express.js
// Allows to use Handlebars template files (*.handlebars)
app.engine("handlebars", handlebars.engine());

// Sets the path where Express will look for the views of the application
app.set("views", rootPath + "/src/views");

// Sets Handlebars to view engine for Express application
app.set("view engine", "handlebars");

/** VIEWS */
app.use(viewsRouter);
