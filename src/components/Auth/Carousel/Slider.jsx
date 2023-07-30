import React from "react";
import classes from "./Slider.module.css";

const delay = 4000;

function Slider(props) {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, props.images.length]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {props.images.map((image, index) => (
          <img className={classes.slide} key={index} src={image.src} alt="" />
        ))}
      </div>

      <div className={classes.slideshowDots}>
        {props.images.map((_, idx) => (
          <div
            key={idx}
            className={`${classes.slideshowDot} ${
              index === idx ? classes.active : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slider;
