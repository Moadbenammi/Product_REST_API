//require modules
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { PORT, MONGO_URI } = require("./app/config/config");
const {swaggerAPIDesc} = require("./apiDocumentation");
const productRoutes = require("./app/routes/product");
const userRoutes = require("./app/routes/user"); 


//Create express app :
const app = express();


//Cors policy :
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Body limits :
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


//Use routes :
app.use("/auth", userRoutes);
app.use("/products", productRoutes);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerAPIDesc));


//Connection to MongoDB :
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);