import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { MantineProvider } from "@mantine/core";
ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: "dark", fontFamily: "" }}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
