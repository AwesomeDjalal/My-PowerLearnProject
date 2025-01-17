const dotenv = require("dotenv").config({path: './.env'});
const express = require("express");
const cors = require("cors")
const cookieParser = require('cookie-parser');
const userRouter = require("./api/patients/user.router");
const doctorRouter = require("./api/doctors/doctor.router");
const adminRouter = require("./api/admin/admin.router");
const labtechRouter = require("./api/labtech/labtech.router");
const bodyParser = require("body-parser");
const app = express();
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions));
app.use(express.json()); //Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({extended: false})); //Parse URL encoded bodies (as sent by HTML forms)
app.use(cookieParser()); //use cookie parser
app.use("/api/users",userRouter);
app.use("/api/doctors",doctorRouter);
app.use("/api/admins",adminRouter);
app.use("/api/labtechs",labtechRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.APP_PORT || 5000;
app.listen(port,() => {
    console.log("Server started on Port :", port);
});
