import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if ((url === "/" || url === "/home") && method === "GET") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Welcome to my website");
    } else if (url === "/image" && method === "GET") {
        res.writeHead(200, {"Content-Type": "image/webp"});
        const imageStream = fs.createReadStream("resources/pig.webp");
        imageStream.pipe(res);
    } else if (url === "/pdf" && method === "GET") {
        res.writeHead(200, {"Content-Type": "application/pdf"});
        const pdfStream = fs.createReadStream("resources/CS472-2024-10A-10D.pdf");
        pdfStream.pipe(res);
    } else if (url === "/about" && method === "GET") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("This is output in console:\n");
        const textStream = fs.createReadStream("resources/lab9_prob1.txt");
        textStream.pipe(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Not found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});