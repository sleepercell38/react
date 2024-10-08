//FORM VALIDATION IN react.js

import React, { useState } from "react";

const app2 = () => {
  const [username, setusername] = useState("");

  function formsubmit(e) {
    e.preventDefault();
    console.log(username);
    setusername("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          formsubmit(e);
        }}
        action=""
        className="flex flex-col gap-2 justify-center items-center"
      >
        <input
          className="text-black font-bold p-2 border-none"
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          placeholder="enter your name"
        />

        <button className="bg-green-500 p-4 rounded">submit</button>
      </form>
    </div>
  );
};

export default app2;
