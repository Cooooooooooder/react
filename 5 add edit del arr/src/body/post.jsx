import "./post.css";

import { useState } from "react";

let nextId = 3;
export default function Scoreboard() {
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [items, setItems] = useState([
    { id: 1, name: "banana" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Apple" },
  ]);

  function handleAdd() {
    if (input.trim() === "") return;

    if (editingId != null) {
      setItems(
        items.map((item) =>
          item.id === editingId ? { ...item, name: input } : item,
        ),
      );
      setEditingId(null)
      setInput("")
    } else {
      nextId = nextId + 1;
      const newItem = {
        id: nextId,
        name: input,
      };

      setItems([...items, newItem]);
      setInput("");
    }
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function editItem(item) {
    setInput(item.name);
    setEditingId(item.id);
  }
  return (
    <div className="container">
  <div className="input-group">
    <input
      value={input}
      onChange={(event) => setInput(event.target.value)}
      type="text"
    />

    <button className="add-btn" onClick={handleAdd}>
      {editingId !== null ? "Save" : "Add"}
    </button>
  </div>

  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <span>{item.name}</span>

        <div className="actions">
          <button
            className="edit-btn"
            onClick={() => editItem(item)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
  );
}
