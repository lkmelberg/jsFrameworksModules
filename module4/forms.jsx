import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      subject,
      body,
    };

    fetch("http://www.example.com", {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "first-name") {
      setFirstName(value);
    }
    if (event.target.name === "last-name") {
      setLastName(value);
    }
    if (event.target.name === "subject") {
      setSubject(value);
    }
    if (event.target.name === "body") {
      setBody(value);
    }
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="Your first name"
          onChange={onTextInputChange}
        />
        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          value={lastName}
          placeholder="Your last name"
          onChange={onTextInputChange}
        />
        <label htmlFor="subject">subject</label>
        <input
          name="subject"
          value={subject}
          placeholder="Your subject"
          onChange={onTextInputChange}
        />
        <label htmlFor="body">Message:</label>
        <input
          name="body"
          value={body}
          placeholder="your message"
          onChange={onTextInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// Level 1 process

//     Create a new CRA or use an existing App.

//     In App.js, or another component, create a form.

//     This form must have the following inputs and states:

//     3.1 First name

//     3.1 Last name

//     3.1 Subject

//     3.1 Body
