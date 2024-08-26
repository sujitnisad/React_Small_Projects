import { Slider } from "@mui/material";
import "./App.css";

import NoteContainer from "./Components/Handover/NoteContainer/NoteContainer";
import Sidebar from "./Components/Handover/Sidebar/Sidebar";
import { useState, useEffect } from "react";

// import Button from "./Components/Test/button";
// import Accordian from "./Components/Accordian/Accordian";
// import Randomcolor from "./Components/Randomcolor/Randomcolor";
// import Star from "./Components/Star/Star";
// import Slider from "./Components/Slider/Slider";
// import Test from "./Components/Test/Test";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );
  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="app">
      {/* <Accordian /> */}
      {/* <Randomcolor /> */}
      {/* <Star /> */}
      {/* <Slider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
