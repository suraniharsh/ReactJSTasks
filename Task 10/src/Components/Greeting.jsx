// Greeting.jsx
import React from "react";

const Greeting = ({ timeOfDay }) => {
  return (
    <div>
      {timeOfDay === "morning" ? (
        <p>Good morning!</p>
      ) : timeOfDay === "afternoon" ? (
        <p>Good afternoon!</p>
      ) : (
        <p>Good evening!</p>
      )}
    </div>
  );
};

export default Greeting;
