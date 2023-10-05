import React from "react";
import styled, { ThemeProvider } from "styled-components";

// Our theme object
const theme = {
  color: {
    primary: "blue",
    secondary: "red",
    tertiery: "white",
  },
};

// In our styled-component we access the properties of our theme
const Button = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  border-radius: 6px;
  border: 2;
  cursor: pointer;
`;
const ExcButton = styled(Button)`
  border-color: ${(props) => props.theme.color.secondary};
`;

function App() {
  // We wrap our code with the ThemeProvider that has the theme
  // passed to it
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button>Click me</Button>
        <ExcButton>Click me</ExcButton>
      </div>
    </ThemeProvider>
  );
}

export default App;

// Level 1 process

//     Create and implement a theme for your app. You only need to have one value in your theme, such as a primary color.

//     Create a <button> styled-component and call it in your app.

//     Add the theme value you created to your <button> styled-component.

//     Create a boolean value and pass it to your styled-component, then alter your styling of the <button> styled-component based on this boolean value passed as a prop.
