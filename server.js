const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const hbs = require("hbs");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const uploadProvinsi = require("./middlewares/upload-provinsi");
const {
  logout,
  renderHome,
  renderDetailProvinsi,
  renderRegister,
  renderAddProvinsi,
  renderAddKabupaten,
  renderLogin,
  renderEditProvinsi,
  renderEditKabupaten,
  renderKabupaten,
  authRegister,
  authLogin,
  addProvinsi,
  addKabupaten,
  deleteProvinsi,
  updateProvinsi,
  updateKabupaten,
  deleteKabupaten,
} = require("./controllers/controllers");
const { formateDate, editTime } = require("./utils/timefunc");
const uploadKabupaten = require("./middlewares/uploads-kabupaten");

require("dotenv").config();
const port = process.env.PORT || 3030;

// Middleware
app.use(flash());
app.use(
  session({
    name: "my-session",
    secret: "lalalala",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  "/uploads/provinsi",
  express.static(path.join(__dirname, "./uploads_provinsi"))
);

app.use(
  "/uploads/kabupaten",
  express.static(path.join(__dirname, "./uploads_kabupaten"))
);
app.use(methodOverride("_method"));

// Set view engine HBS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerHelper("equal", (a, b) => {
  return a === b;
});
hbs.registerHelper("formateDate", formateDate);
hbs.registerHelper("editTime", editTime);
//use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  "/uploads_provinsi",
  express.static(path.join(__dirname, "./uploads_provinsi"))
);
app.use(
  "/uploads_kabupaten",
  express.static(path.join(__dirname, "./uploads_kabupaten"))
);
// Routing untuk halaman utama
app.get("/", renderHome);
app.get("/register", renderRegister);
app.get("/login", renderLogin);
app.get("/create-provinsi", renderAddProvinsi);
app.get("/edit-provinsi/:id", renderEditProvinsi);
app.get("/list-kabupaten", renderKabupaten);
app.get("/create-kabupaten", renderAddKabupaten);
app.get("/edit-kabupaten/:id", renderEditKabupaten);
app.get("/detail-provinsi/:id", renderDetailProvinsi);
app.get("/logout", logout);
//Semua function Post
app.post("/register", authRegister);
app.post("/login", authLogin);
app.post("/create-provinsi", uploadProvinsi.single("image"), addProvinsi);
app.post("/create-kabupaten", uploadKabupaten.single("image"), addKabupaten);
//update
app.patch("/edit-provinsi/:id", uploadProvinsi.single("image"), updateProvinsi);
app.patch(
  "/edit-kabupaten/:id",
  uploadKabupaten.single("image"),
  updateKabupaten
);
//delete
app.delete("/delete-kabupaten/:id", deleteKabupaten);
app.delete("/delete/:id", deleteProvinsi);
// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

