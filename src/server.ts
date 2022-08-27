import express from "express";
import { router } from "./routes";
import bodyParser from "body-parser";

const server = express();
const port = 3000

server.use(bodyParser.json())

server.use(router);

server.listen(3000, ()=>{
    console.log(`Server is Running on ${port}`)
})