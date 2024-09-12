import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  //useState to manage the selected board index
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  // handles toggling the selected board
  const handleToggle = () => {
    // Increment the selected board index, wrapping around to 0 when reaching the total number of boards.

    setSelectedBoardIndex((prevIndex) => (prevIndex + 1) % props.numBoards);
  };

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    // Check if the current board should be selected
    let isSelected = ii === selectedBoardIndex;
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      {/*add the onClick event handler to the button and display current selection */}
      <button onClick={handleToggle}>Toggle</button>
      <span style={{ marginLeft: "10px" }}>
        current box: {selectedBoardIndex + 1}
      </span>
    </div>
  );
}

export default BoardSwitcher;
