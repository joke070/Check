import React, { useState } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState({
    title: "",
    note: "",
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(input);
    event.preventDefault();
    setInput({ title: "", note: "" });
  }
  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form>
        <input
          onClick={expand}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          name="title"
          value={input.title}
          rows={isExpanded ? 3 : 1}
        />
        <br />
        {isExpanded ? (
          <textarea
            onChange={handleChange}
            placeholder="Take a Note"
            name="note"
            value={input.note}
          ></textarea>
        ) : null}

        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddCommentIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
