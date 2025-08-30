# 📒 Node.js Notes API

A simple Notes API built using Node.js (without Express).
This project demonstrates how to create a backend server with pure Node.js core modules to handle CRUD operations and persist data in a JSON file.

## 🚀 Features

Add a new note
View all notes
Stores data in a JSON file

Uses Node.js core modules only (no external frameworks like Express)

## 🛠️ Tech Stack

Node.js (http, fs, path modules)
JSON file for storage

## 📂 Project Structure

backEnd/
├── server.js # Node.js backend server
├── notes.json # Stores notes data
├── package.json # Dependencies and scripts
└── node_modules/ # Installed dependencies

frontEnd/
├── index.html # UI structure
├── style.css # Styling
└── script.js # Handles frontend logic & API calls

## 🚀 Features
- Add notes  
- View saved notes  
- Persistent storage (using JSON file as a database)  
- Simple frontend connected to backend via REST API  
---
## 🛠️ Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/simple-notes-app.git
   cd simple-notes-app/backEnd
   
2 . Install dependencies:
    npm install
    
3 . Run the backend server: 
    node server.js
    Server runs at: http://localhost:3000
    
4.Open the frontend : 
   Navigate to frontEnd/index.html in your browser
   Or serve it via VSCode Live Server

## 📌 Future Improvements

   Add update & delete note functionality
   Replace file storage with a database (MongoDB, PostgreSQL)
   
