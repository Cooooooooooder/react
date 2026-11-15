
import { useReducer, useState } from "react";
import "./App.css";
 
const initState = [
  {
    id: 0,
    name: "ahmed",
    service: "Cardiology",
    time: { hour: "04:00", day: "2027/04/19" },
    isConfirmed: false,
  },
  {
    id: 1,
    name: "ali",
    service: "Dentistry",
    time: { hour: "03:00", day: "2027/04/09" },
    isConfirmed: false,
  },
];
 
const SERVICES = ["Cardiology", "Dentistry", "Dermatology", "Pediatrics", "Orthopedics"];
 
// الوقت والتاريخ بيتاخدوا أوتوماتيك من الجهاز وقت الإضافة
const getNow = () => {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return {
    day: `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())}`,
    hour: `${pad(d.getHours())}:${pad(d.getMinutes())}`,
  };
};
 
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((appt) => appt.id !== action.payload);
    case "TOGGLE_CONFIRM":
      return state.map((appt) =>
        appt.id === action.payload
          ? { ...appt, isConfirmed: !appt.isConfirmed }
          : appt
      );
    default:
      return state;
  }
};
 
const App = () => {
  const [appointments, dispatch] = useReducer(reducer, initState);
  const [name, setName] = useState("");
  const [service, setService] = useState(SERVICES[0]);
 
  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        name: name.trim(),
        service,
        time: getNow(),
        isConfirmed: false,
      },
    });
    setName("");
  };
 
  return (
    <div className="app">
      <h1 className="app-title">Appointments</h1>
      <p className="app-count">{appointments.length} total</p>
 
      <form className="add-form" onSubmit={handleAdd}>
        <input
          className="input"
          type="text"
          placeholder="Patient name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="input"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button className="btn btn-add" type="submit">
          Add appointment
        </button>
      </form>
 
      {appointments.length === 0 ? (
        <p className="empty">No appointments yet. Add your first one above.</p>
      ) : (
        <ul className="appt-list">
          {appointments.map((appt) => (
            <li className="appt-item" key={appt.id}>
              <div className="appt-info">
                <span className="appt-title">
                  {appt.name} <span className={appt.isConfirmed ? "badge badge-ok" : "badge"}>
                    {appt.isConfirmed ? "Confirmed" : "Pending"}
                  </span>
                </span>
                <span className="appt-date">
                  {appt.service} • {appt.time.day} • {appt.time.hour}
                </span>
              </div>
              <div className="actions">
                <button
                  className={appt.isConfirmed ? "btn btn-cancel" : "btn btn-save"}
                  onClick={() => dispatch({ type: "TOGGLE_CONFIRM", payload: appt.id })}
                >
                  {appt.isConfirmed ? "Unconfirm" : "Confirm"}
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => dispatch({ type: "REMOVE", payload: appt.id })}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
 
export default App;
 