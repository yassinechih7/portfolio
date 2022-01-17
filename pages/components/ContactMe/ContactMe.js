import React from "react";
import { useForm } from "react-hook-form";

function ContactMe() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  return (
    <div>
      <div className="contact-me-title">
        <h2>Contact Me</h2>
      </div>
      <form action="">
        <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
        <p>{result}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ContactMe;
