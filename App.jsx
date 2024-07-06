import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  const [Notes, setNotes] = useState([]);

  function addInput(input) {
    setNotes((prevNotes) => {
      return [...prevNotes, input];
    });
  }
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((Notes, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />

      <CreateArea onAdd={addInput} />

      {Notes.map((newNote, index) => (
        <Note
          id={index}
          key={index}
          title={newNote.title}
          note={newNote.note}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
