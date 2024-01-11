import express from "express";
import { ApiHandler } from "./handler/APIHandler";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server running on https://localhost:${port}`)
});

app.use(express.json())

app.get("/", async (req, res) => {
    try {
        const handler = new ApiHandler()
        const response = await handler.getMethodHandler()
    res.send(response)
    } catch (error) {
        throw error
    }
    
})

app.post("/", async (req, res) => {
    try {
        const handler = new ApiHandler()
        const response = await handler.postMethodHandler(req.body)
        res.send(response)
    } catch (error) {
        throw error
    }
} )