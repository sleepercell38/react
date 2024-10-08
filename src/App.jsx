import { useState } from "react";

function app() {
  const [username, setusername] = useState("");
  const [a, seta] = useState(10);
  function abc() {
    seta(a + 1);
  }
  function efg() {
    seta(a- 1);
  }

  function formsubmit(f) {
    f.preventDefault();
    console.log("submitted");
    console.log(username);
    setusername("");
  }

  return (
    <div className="flex flex-col gap-2 p-4 justify-center items-center">
      <h1 className="font-black  font-mono  text-4xl"> THE NUMBER IS {a}</h1>
      <button onClick={abc} className="bg-green-500 p-4 rounded xl">
        
        INCREMENT
      </button>
      <br />
      <button onClick={efg} className="bg-green-500 p-4 rounded xl">
       
        DECREMENT
      </button>

      <form
        onSubmit={(f) => {
          formsubmit(f);
        }}
        className="flex flex-col gap-2 justify-center items-center"
        action=""
      >
        <label className="antialiased font-bold   " htmlFor="num">
          {" "}
          ENTER THE NUMBER :
        </label>
        <input
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          className="text-black font-bold p-2 border-none	"
          id="num"
          type="text"
          placeholder="enter the number"
        />

        <button className="bg-green-500 p-4 rounded">SUBMIT</button>
      </form>
    </div>
  );
}

export default app;
