import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import { Dashboard } from "./Dashboard";
import { Profile } from "./Profile";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Profile />
          <Dashboard />
        </>
      ) : (
        <div>
          {currentForm === "login" ? (
            <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
