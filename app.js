import express from "express";
import connect from "./src/db/database.js";
import routes from "./src/routes/router.js"


const app = express();
app.use(express.json())
connect()


app.use("/crline", routes)
const port = process.env.PORT || 1109



app.listen(port, ()=>{
    console.log(`SERVIDOR DISPONIVEL EM HTTP://localhost:${port}`)
})

app.get("/crline", (req, res) => {
    res.send("Bem-vindo a API da CRLINE")
    
});




