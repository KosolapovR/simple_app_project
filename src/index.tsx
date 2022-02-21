import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path='registration' element={<RegistrationPage />} />
        <Route path='login' element={<LoginPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
