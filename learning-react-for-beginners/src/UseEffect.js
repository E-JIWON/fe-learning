import React, { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log("i run all the time");

  useEffect(() => {
    console.log("call the API...");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("search for ", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default UseEffect;
