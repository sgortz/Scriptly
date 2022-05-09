import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles.css";
import {RecoilRoot} from 'recoil';


// var mountNode = document.getElementById("app");
// ReactDOM.render(<App name="John" />, mountNode);

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <RecoilRoot>
    <App tab="home" />
  </RecoilRoot>
);