import { useState } from "react";

const Randomcolor = () => {
  const [hexcolor, sethexcolor] = useState();
  const [rgbcolor, setrgbcolor] = useState();
  function utility(len) {
    const r = Math.floor(Math.random() * len);
    return r;
  }
  function handlehex() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let col = "#";
    for (let i = 0; i < 6; i++) {
      col += hex[utility(hex.length)];
    }
    console.log(col);

    sethexcolor(col);
  }
  function handlergb() {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);
    const col = `rgb(${r}, ${g}, ${b})`;
    console.log(col);

    setrgbcolor(col);
  }
  return (
    <div style={{ diaplay: "flex", flexDirection: "row", gap: "10px" }}>
      <div
        style={{
          width: "100vw",
          height: "40vh",
          backgroundColor: hexcolor,
        }}
      >
        <button onClick={handlehex}>generate hex</button>
        <h2>{`hex color code is: ${hexcolor} `}</h2>
      </div>

      <div
        style={{
          width: "100vw",
          height: "40vh",
          backgroundColor: rgbcolor,
        }}
      >
        <button onClick={handlergb}>generate rgb</button>
        <h2>{`rgb color code is: ${rgbcolor} `}</h2>
      </div>
    </div>
  );
};

export default Randomcolor;
