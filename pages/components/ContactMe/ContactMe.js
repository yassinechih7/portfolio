import React, {useState} from "react";
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
        <input {...register("firstName")} placeholder="Your name" />
        <input {...register("lastName")} placeholder="Email address" />
        <input {...register("lastName")} placeholder="Phone number" />
        <input {...register("lastName")} placeholder="Subject" />
        
        <textarea {...register("lastName")} placeholder="Message"  cols="30" rows="10">

        </textarea>
        <p>{result}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ContactMe;
