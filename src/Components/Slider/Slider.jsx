import { useState, useEffect } from "react";
import "./Slider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Slider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function imageFetch(url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") imageFetch(url);
  }, [url]);

  if (loading) {
    return <div>Loading!! please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>error!! occured{errorMsg}</div>;
  }

  function handleLeft() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleRight() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  console.log(currentSlide);
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleLeft}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((img, index) => {
            return (
              <img
                key={img.id}
                alt={img.download_url}
                src={img.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleRight}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator  hide-indicator"
                  }
                ></button>
              );
            })
          : null}
      </span>
    </div>
  );
};

export default Slider;
