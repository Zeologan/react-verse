import React, { useState } from "react";
import "./MsgForm.css";
import { useForm } from "react-hook-form";

const MsgForm = () => {
  // This code initializes the useForm hook and extracts the necessary methods (register, handleSubmit, reset, and errors) for managing form state and validation in the component.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // isFormSubmitted: tracks whether the form has been submitted or not.used to update the value of isFormSubmitted
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  // fetch data and clear input field
  const onSubmit = (data) => {
    console.log(data);
    reset();
    setFormSubmitted(true);
    alert("Form submitted successfully");
  };

  return (
    <form className="msgForms" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="msgForm-contanier">
        <div>
          <label htmlFor="Name">Your Name</label>
          <input
            id="Name"
            {...register("Name", { required: true })}
            type="text"
            placeholder="Kumar"
          />
          {errors.Name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="Email">Your Email</label>
          <input
            id="Email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Kumar@123gmail.com"
          />
          {errors.Email && <span>{errors.Email.message}</span>}
        </div>
      </div>

      <label htmlFor="Subject">Your Subject</label>
      <input
        id="Subject"
        {...register("Subject", { required: true })}
        type="text"
        placeholder="Manali Trips"
      />
      {errors.Subject && <span>This field is required</span>}

      <label htmlFor="Msg" style={{ color: "#df08df" }}>
        Message
      </label>
      <textarea
        id="Msg"
        {...register("Msg", { required: true })}
        rows={3}
        placeholder="Write here your message"
      ></textarea>
      {errors.Msg && <span>This field is required</span>}

      <button type="submit" className="btn" style={{ width: "10rem" }}>
        Send Message
      </button>
    </form>
  );
};

export default MsgForm;

// Advantage:-
// Optimized Re-rendering : minimizes re-renders by isolating component re-renders to specific form fields
// Less State Management Overhead:
// Less Boilerplate Code
// Built-in Validation:

// Documentation------------------------------------------------------
// Step 1: Install react-hook-form : npm install react-hook-form
// Step 2: Set up a Form Component

// React: Imported to use React functionalities.
// useState: A React hook for managing local component state.
// useForm: A hook from the react-hook-form library for handling form state and validation.

// useForm(): Initializes the form handling.
// register: A function used to register form inputs for validation and state management.
// handleSubmit: A function to handle form submission.
// reset: A function to reset the form fields.
// formState.errors: An object containing validation errors for the form fields.

// isFormSubmitted: A state variable to track if the form has been submitted.
// setFormSubmitted: A function to update the isFormSubmitted state.

// onSubmit: A function that handles the form submission.
// data: Contains the form data when the form is submitted.
// console.log(data): Logs the form data to the console.
// reset(): Resets the form fields to their initial state.
// setFormSubmitted(true): Updates the state to indicate the form has been submitted.
// alert("Form submitted successfully"): Displays an alert message indicating successful submission.

// The form element:
// onSubmit={handleSubmit(onSubmit)}: Handles form submission using handleSubmit from react-hook-form, which wraps the onSubmit function.
// noValidate: Disables the browser's default validation to rely on custom validation logic.
// register("Name", { required: true }): Registers the input field with validation rules (e.g., required).
// errors.Name: Checks if there are any validation errors for the "Name" field.
// className={errors.Name ? "error" : ""}: Applies the "error" CSS class if there are validation errors.
// {errors.Name && <span>This field is required</span>}: Conditionally renders an error message if validation fails.
