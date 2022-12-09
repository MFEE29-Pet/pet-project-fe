import React, { useContext, useState } from 'react';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

function GoToTop() {
  const [hover, setHover] = useState(false);
  const { mode } = useContext(SwitchButtonContext);
  return (
    <>
      <div
        className="go-to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        {/* <svg
          width="333"
          height="460"
          viewBox="0 0 333 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 64H300.5C318.2 64 332.5 49.7 332.5 32C332.5 14.3 318.2 0 300.5 0H32C14.3 0 0 14.3 0 32C0 49.7 14.3 64 32 64ZM48.7 212.5C36.2 225 36.2 245.3 48.7 257.8C61.2 270.3 81.5 270.3 94 257.8L135.3 216.4V321.75V427.1C135.3 444.8 149.6 459.1 167.3 459.1C185 459.1 199.3 444.8 199.3 427.1V216.4L240.7 257.8C253.2 270.3 273.5 270.3 286 257.8C298.5 245.3 298.5 225 286 212.5L190 116.5C177.5 104 157.2 104 144.7 116.5L48.7 212.5Z"
            fill="#fff"
          />
        </svg> */}
        {mode === 'dog' ? (
          <img
            src={`/images/${hover ? 'GoToTop_Dog2.png' : 'GoToTop_Dog1.png'}`}
            alt=""
          />
        ) : (
          <img
            src={`/images/${hover ? 'GoToTop_Cat2.png' : 'GoToTop_Cat1.png'}`}
            alt=""
          />
        )}
      </div>
    </>
  );
}

export default GoToTop;
