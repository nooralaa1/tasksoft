import  express from "express";
import { engine } from "express-handlebars";
import  studentRoutes  from "./routes/studentRoutes.js";




const app = express();


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");


app.use("/student", studentRoutes);

app.get("/", (req, res) => {
    res.render("student");
});
app.listen(3000);