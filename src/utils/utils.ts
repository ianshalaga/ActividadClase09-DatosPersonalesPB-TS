import { fileURLToPath } from "url";
import { dirname } from "path";

// PATHS
// Absolute root path
const __filename = fileURLToPath(import.meta.url); // Current file absolute path (.../utils.ts)
const __dirname = dirname(__filename); // Current folder absolute path (.../utils)
export const rootPath = dirname(dirname(__dirname)); // Root folder absolute path (.../)

// PORT
export const PORT = 8080;

// FUNCTIONS

export function randomNumers(min: number, max: number) {
  return Math.floor(Math.random() * max) + min;
}

// DATA

export const users = [
  {
    name: "nombre1",
    lastName: "apellido1",
    age: "edad1",
    email: "email1",
    telephone: "teléfono1",
  },
  {
    name: "nombre2",
    lastName: "apellido2",
    age: "edad2",
    email: "email2",
    telephone: "teléfono2",
  },
  {
    name: "nombre3",
    lastName: "apellido3",
    age: "edad3",
    email: "email3",
    telephone: "teléfono3",
  },
  {
    name: "nombre4",
    lastName: "apellido4",
    age: "edad4",
    email: "email4",
    telephone: "teléfono4",
  },
  {
    name: "nombre5",
    lastName: "apellido5",
    age: "edad5",
    email: "email5",
    telephone: "teléfono5",
  },
];
