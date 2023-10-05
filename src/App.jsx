import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Logo from "./imgs/imgs.png";

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
        <img src={Logo} alt="Logo" />
      </div>
    </ThemeProvider>
  );
}

export default App;

// Level 1 process

//     Start with a new CRA or use and existing app.

//     Download the example image which you can do by right-clicking the image and choosing "Save image as". Make sure to save this image to your App, such as /src/images/logo.png.

//     Load the example image into your app using the import method.
