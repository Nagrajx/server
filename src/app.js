const express = require("express");
const authRoute = require("./routes/authRoutes");
const employeeRoute = require("./routes/employeeRoute");
const customerRoute = require("./routes/customerRoute")
const cookieParser =  require("cookie-parser")
const app = express();
const cors  = require("cors")

app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies
  })
);
// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/employee", employeeRoute);
app.use("/api/v1/customer", customerRoute);


module.exports = app;