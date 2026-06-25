import { useState } from "react";
import "./form.css";

export default function Form() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    check_state: false,
    country: "",
    gender: "",
  });

  const [values2, setValues2] = useState({
    name2: "",
    email2: "",
    message2: "",
    check_state2: false,
    country2: "",
    gender2: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setValues2({
      name2: values.name,
      email2: values.email,
      message2: values.message,
      check_state2: values.check_state,
      country2: values.country,
      gender2: values.gender,
    });
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>

      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        value={values.name}
        onChange={(e) =>
          setValues({
            ...values,
            name: e.target.value,
          })
        }
      />

      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={(e) =>
          setValues({
            ...values,
            email: e.target.value,
          })
        }
      />

      <label htmlFor="message">Message</label>

      <textarea
        id="message"
        type="text"
        placeholder="Enter your Message"
        value={values.message}
        onChange={(e) =>
          setValues({
            ...values,
            message: e.target.value,
          })
        }
      />
      <label> Are You Okay</label>
      <input
        type="checkbox"
        checked={values.check_state}
        onChange={(e) =>
          setValues({
            ...values,
            check_state: e.target.checked,
          })
        }
      />

      <label>Country</label>
      <select
        value={values.country}
        onChange={(e) =>
          setValues({
            ...values,
            country: e.target.value,
          })
        }
      >
        <option value="">Choose Country</option>
        <option value="Egypt">Egypt</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="UAE">UAE</option>
      </select>
      <>
        <label>
          <input
            type="radio"
            value="Male"
            checked={values.gender === "Male"}
            onChange={(e) =>
              setValues({
                ...values,
                gender: e.target.value,
              })
            }
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            checked={values.gender === "Female"}
            onChange={(e) =>
              setValues({
                ...values,
                gender: e.target.value,
              })
            }
          />
          Female
        </label>
      </>

      <button type="submit">Submit</button>
      <div className="output">
        <h3>{values2.name2}</h3>
        <h3>{values2.email2}</h3>
        <h3>{values2.message2}</h3>
        <h3>{values2.check_state2 ? "Checked" : "Not Checked"}</h3>
        <h3>{values2.country2}</h3>
        <h3>{values2.gender2}</h3>
      </div>
    </form>
  );
}
