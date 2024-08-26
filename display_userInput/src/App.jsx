import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showFlag, setShowFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFlag(true);
    // setUserName("");
    // setUserPassword("");
  };

  const handleClear = () => {
    setShowFlag(false);
  };

  return (
    <div className="outerdiv">
      <form className="formdiv">
        <label htmlFor="name">User name</label>
        <input
          type="text"
          id="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Show Data
        </button>
        <button type="submit" onClick={handleClear}>
          clear Data
        </button>
      </form>

      {showFlag && (
        <>
          <h1>{userName}</h1>
          <p>{userPassword}</p>
        </>
      )}
    </div>
  );
};

export default App;
