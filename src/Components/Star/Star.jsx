import { FaStar } from "react-icons/fa";
import "./Star.css";
import { useState } from "react";
const Star = ({ noOfStars = 5 }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  function handleClick(index) {
    setRating(index);
  }
  function handleEnter(index) {
    setHover(index);
  }
  function handleLeave() {
    setHover(rating);
  }

  return (
    <div>
      <div>
        {[...Array(noOfStars)].map((_, index) => {
          index++;
          console.log(index, rating);
          return (
            <FaStar
              className={index <= (hover || rating) ? "active" : "inactive"}
              key={index}
              size={60}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleEnter(index)}
              onMouseLeave={() => handleLeave()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Star;
