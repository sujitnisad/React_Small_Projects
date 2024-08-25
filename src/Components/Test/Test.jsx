import { useState, useEffect } from "react";
function Test() {
  const [flag, setflag] = useState(false);
  function handleClick() {
    setflag(flag + 1);
  }
  useEffect(() => {
    console.log("click hua bhai");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>click kar</button>
    </div>
  );
}
export default Test;
