import "./button.css";

export default function Button({ title, children }) {
  if (title == "" || title == null) {
    return null;
  }

  return (
    <button className="tag">
      {title}
      <br></br>
      {children}
    </button>
  );
}
