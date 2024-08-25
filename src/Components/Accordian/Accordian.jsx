import { useState } from "react";
import "./Accordian.css";
import data from "./Data.js";
const Accordian = () => {
  const [single, setsingle] = useState(null);
  const [clicked, setclicked] = useState(false);
  const [multiple, setmultiple] = useState([]);
  function handlesingle(id) {
    setsingle(id === single ? null : id);
    // console.log(id);
  }
  function handlemultiple(id) {
    const cpymultiple = [...multiple];
    const indexof = cpymultiple.indexOf(id);
    indexof === -1 ? cpymultiple.push(id) : cpymultiple.splice(indexof, 1);
    console.log(cpymultiple);
    setmultiple(cpymultiple);
  }
  return (
    <div>
      <div>
        <button onClick={() => setclicked(!clicked)}>multiple selection</button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="main">
              <div
                onClick={
                  clicked
                    ? () => handlemultiple(item.id)
                    : () => handlesingle(item.id)
                }
                className="title"
              >
                <h2>
                  {item.question}
                  <br></br> <span>+</span>
                </h2>
              </div>
              {clicked
                ? multiple.indexOf(item.id) !== -1 && <div>{item.answer}</div>
                : single === item.id && <div>{item.answer}</div>}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
