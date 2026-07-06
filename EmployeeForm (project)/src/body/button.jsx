import "./button.css";
export default function Success({ onClose , message}) {
  return (
    <div className="success-overlay" 
        onClick={onClose}
    >
      <h1 
         onClick={(e) => e.stopPropagation()}
      >  {message}  </h1>
    </div>
  );
}