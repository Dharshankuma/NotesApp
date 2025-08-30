const API_URL = "http://localhost:3000";

async function addNote() {
  const noteText = document.getElementById("notes_input").value.trim();
  if (!noteText) {
    alert("please enter a note");
    return;
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: noteText }),
  });

  console.log(response);
  document.getElementById("notes_input").value = "";
  loadNotes();
}

async function loadNotes() {
  const response = await fetch(API_URL);
  console.log(response);
  const notes = await response.json();
  console.log(notes);

  const notesList = document.getElementById("notes_list");
  notesList.innerHTML = "";
  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "notes_list_items";
    div.textContent = note.id + ". " + note.text;
    notesList.appendChild(div);
  });
}

loadNotes();
