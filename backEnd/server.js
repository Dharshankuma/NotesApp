const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

let notes = [];

const notesFilePath = path.join(__dirname, "notes.json");

function readNotes() {
  if (!fs.existsSync(notesFilePath)) {
    fs.writeFileSync(notesFilePath, JSON.stringify([]));
  }

  const data = fs.readFileSync(notesFilePath, "utf-8");
  return JSON.parse(data);
}

function writeNotes(notes) {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
}

function getNextId(notes) {
  if (notes.length === 0) return 1;
  return Math.max(...notes.map((n) => n.id)) + 1;
}

const server = http.createServer((req, res) => {
  //---------cors header-----------------

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === "GET") {
    //fetching notes and returning the notes as json content
    const notes = readNotes();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(notes));
  } else if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const { text } = JSON.parse(body);
        console.log(text);
        const notes = readNotes();

        const newnotes = { id: getNextId(notes), text: text };
        notes.push(newnotes);
        writeNotes(notes);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            status: "success",
            message: "Note added succesfully",
          })
        );
      } catch (err) {
        res.writeHead(500, { "content-type": "application/json" });
        res.end(
          JSON.stringify({ status: "error", message: "Failed to add note Try" })
        );
      }
    });
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ status: "error", message: "Error Occured" }));
  }
});

server.listen(port, () => {
  console.log("Server running at http ://localhost:3000");
});
