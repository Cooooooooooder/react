import { useState } from "react";
import Success from "./button.jsx";
import "./EmployeeForm.css";

export default function EmployeeForm() {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

const isFormValid =
   formData.name != "" &&
      formData.phoneNumber != "" &&
      formData.age != "";

  function handleSubmit(e) {
   
      e.preventDefault();
      console.log(formData);

      if (formData.name.trim() === "") {
        setMessage("❌ Name is required");
        setShowMessage(true);
        return;
      }

      if (formData.phoneNumber.length !== 11) {
        setMessage("❌ Phone number must be 11 digits");
        setShowMessage(true);
        return;
      }

      if (formData.age < 18 || formData.age > 80) {
        setMessage("❌ Age must be at least 18 and at most 80");
        setShowMessage(true);
        return;
      }

      if (formData.salary === "") {
        setMessage("❌ Please select a salary");
        setShowMessage(true);
        return;
      }

      setMessage("✅ The form has been submitted successfully!");
      setShowMessage(true);
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Employee Form</h2>

        <div>
          <label>Name:</label>
      
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
        </div>


        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                phoneNumber: e.target.value,
              })
            }
          />
        </div>


        <div>
          <label>Age:</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) =>
              setFormData({
                ...formData,
                age: e.target.value,
              })
            }
          />
        </div>


        <div className="checkbox-container">
          <label>Are you an employee?</label>

          <input
            type="checkbox"
            checked={formData.isEmployee}
            onChange={(e) =>
              setFormData({
                ...formData,
                isEmployee: e.target.checked,
              })
            }
          />
        </div>

    

        <div>
          <label>Salary:</label>
          <select
            value={formData.salary}
            onChange={(e) =>
              setFormData({
                ...formData,
                salary: e.target.value,
              })
            }
          >
            <option value="">Select Salary</option>
            <option value="1000">$1,000</option>
            <option value="2000">$2,000</option>
            <option value="3000">$3,000</option>
            <option value="5000">$5,000</option>
          </select>
        </div>


        <button type="submit"  disabled={!isFormValid} >Submit</button>
      </form>
      {showMessage && (
        <Success message={message} onClose={() => setShowMessage(false)} />
      )}
    </div>
  );
}
