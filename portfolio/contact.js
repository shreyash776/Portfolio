import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { send } from "@emailjs/browser";

type Inputs = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset({ name: "", email: "", subject: "", message: "" });
    send("priyanshusaini", "template_r3ugpyk", data, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((response) =>
        console.log("SUCCESS!", response.status, response.text)
      )
      .catch((err) => console.log("FAILED...", err));
    send;
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <style jsx>{`
        form {
          /* Center the form on the page */
          margin: 0 auto;
          /* Form outline */
          padding: 1em;
          border-radius: 1em;
        }
        .card {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 12px 56px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 20px;
          top: 15%;
          left: 28%;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        form li + li {
          margin-top: 1em;
        }

        label {
          /* Uniform size & alignment */
          display: inline-block;
          width: 90px;
          text-align: right;
          padding-right: 2px;
        }

        input,
        textarea {
          /* To make sure that all text fields have the same font settings
               By default, textareas have a monospace font */
          font: 1em sans-serif;
          padding: 10px;

          /* Uniform text field size */
          width: 300px;
          outline: none;
          box-sizing: border-box;

          /* Match form field borders */
          border: 2px solid white;
          border-radius: 5px;
          margin-left: 4px;
        }

        input:focus,
        textarea:focus {
          /* Additional highlight for focused elements */
          border: 1px none;
        }
        input,
        textarea {
          color: black;
        }

        textarea {
          /* Align multiline text fields with their labels */
          vertical-align: top;

          /* Provide space to type some text */
          height: 5em;
        }

        .button {
          /* Align buttons with the text fields */
          padding-left: 90px; /* same size as the label elements */
        }

        button {
          /* This extra margin represent roughly the same space as the space
               between the labels and their text fields */
          margin-left: 0em;
          padding: 20px;
          color: white;
          border: 1px none;
          font-size: 14px;
          background-color: #4169e1;
          border-radius: 20px;
        }
        li {
          display: flex;
        }
      `}</style>
      <div className="card max-w-fit lg:scale-x-2">
        <h1 className="text-4xl">Post a Message</h1>
        <form className="w-80 lg:w-96" onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <li>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                required
                {...register("name", {
                  required: true,
                  min: 2,
                  pattern: /^[a-zA-Z ]{2,30}$/i,
                })}
              />
            </li>
            <li>
              <label htmlFor="mail">E-mail:</label>
              <input
                type="email"
                id="mail"
                required
                {...register("email", { required: true })}
              />
            </li>
            <li>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                required
                {...register("subject", {})}
              />
            </li>
            <li>
              <label htmlFor="msg">Message:</label>
              <textarea
                id="msg"
                {...register("message", {})}
                defaultValue={""}
              />
            </li>
            <li className="button">
              <button type="submit">
                <b>Send your message</b>
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;