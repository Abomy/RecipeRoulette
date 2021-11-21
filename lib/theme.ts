import { createGlobalStyle } from "styled-components";

export const Theme = {
  colours: {
    header: "#45a049",
    body: "#fff",
    footer: "#003333",
  },
  images: {
    logo: "./images/logo.png",
  },

  mobile: "768px",
  background: "./images/background_large.jpg",
};

export const GlobalStyles = createGlobalStyle`
html {  
  font-size: 62.5%;
  font-family: Arial, sans-serif;
}

* {
  box-sizing: border-box;
}
body {
  background-image: url(${({ theme }) => theme.background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  color: hsl(192, 100%, 9%);
  font-family: 'Poppins', sans-serif;
  font-size: 1.15em;
  margin: 0;
  padding: 0px;
}
p {
  opacity: 0.6;
  line-height: 1.5;
}
img {
  max-width: 100%;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}


`;
