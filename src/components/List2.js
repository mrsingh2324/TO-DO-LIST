import React, { useState } from "react";
import "./List2.css";

function List2() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function getElement(e) {
    setInput(e.target.value);
  }

  function addElement() {
    if (input.trim().length > 0) {
      const updatedList = [...list, input.trim()];
      setInput("");
      setList(updatedList);
    } else {
      alert("Enter some name to be added");
    }
  }

  function removeElement(i) {
    const updatedList1 = list.filter((e, id) => {
      return i !== id;
    });
    setList(updatedList1);
  }

  function removeAll() {
    setList([]);
  }

  return (
    <div>
      <h1>To do List</h1>
      <div className="container">
        <h1 className="list-heading">List</h1>
        <input type="text" value={input} onChange={getElement} className="input" />
        <button onClick={addElement}>Add</button>
        {list.length > 0 ? (
          <h1>List Of items</h1>
        ) : (
          <h1>No Items</h1>
        )}
        <div className="list-items">
          {list.length > 0 &&
            list.map((e, i) => {
              return (
                <div key={i} className="list">
                  <div className="list-items">
                    <h4 className="items">{e}</h4>
                  </div>
                  <button onClick={() => removeElement(i)} className="remove">
                    Remove
                  </button>
                </div>
              );
            })}
          {list.length >= 1 && (
            <button onClick={removeAll} className="removeall">
              Remove all
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default List2;
