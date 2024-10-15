import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get(["/", "/home"], (req, res, next) => {
    res.send("Welcome to my website");
})

app.get("/image", (req, res, next) => {
    res.sendFile(path.join(__dirname, "resources", "pig.webp"));
})

app.get("/pdf", (req, res, next) => {
    res.sendFile(path.join(__dirname, "resources", "CS472-2024-10A-10D.pdf"));
})

app.get("/about", (req, res, next) => {
    res.sendFile(path.join(__dirname, "resources", "sample_txt_file.txt"));
})

// Error handler
app.use((req, res, next) => {
    res.status(404).send("Page not found");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});