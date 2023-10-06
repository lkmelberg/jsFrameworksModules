import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your name should be at least 3 characters.")
      .max(10, "Your first name cannot be longer than 10 characters.")
      .required("Please enter your first name"),
    email: yup.string().email().required(),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .max(100, "Your subject cannot be longer than 100 characters.")
      .required("Please enter subject"),
    body: yup
      .string()
      .min(3, "Your body should be at least 3 characters.")
      .max(1000, "Your body cannot be longer than 100 characters.")
      .required("Please enter body"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Your subject" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>
      <input {...register("subject")} />
      <p>{errors.subject?.message}</p>
      <input {...register("body")} />
      <p>{errors.body?.message}</p>
      <input type="submit" />
    </form>
  );
}

export default App;

// Level 1 process

//     Create a new CRA or reuse an existing one.

//     In App.js, or another component, create a form that contains the following inputs.

//     2.1 fullName: A string. Must be greater than 3 characters and less than 50 characters. Required field.

//     2.2 email: A string. Must be a valid email address (use email() or a Regex pattern). Required field.

//     2.3 subject: A string. Must be greater than 3 characters and less than 100 characters. Required field.

//     2.4 body: A string. Must be greater than 3 characters and less than 1000 characters. Required field.
