// import React, { useState, useEffect } from "react";

// const AnimatedHeader = ({ text }) => {
//   const [letters, setLetters] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//   const [iteration, setIteration] = useState(0);
//   let interval =null;
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIteration(iteration => iteration + 1 / 3);
//     }, 30);
    
//     return () => clearInterval(interval);
//   }, []);
  
//   const handleMouseOver = event => {
//     clearInterval(interval);
//     setIteration(0);
    
//     interval = setInterval(() => {
//       event.target.innerText = event.target.innerText
//         .split("")
//         .map((letter, index) => {
//           if(index < iteration) {
//             return text[index];
//           }

//           return letters[Math.floor(Math.random() * 26)];
//         })
//         .join("");

//       if(iteration >= text.length){ 
//         clearInterval(interval);
//       }
//     }, 30);
//   };
  
//   return (
//     <h1 onMouseOver={handleMouseOver} data-value={text}>
//       {text}
//     </h1>
//   );
// };

// export default AnimatedHeader;


import React, { useState, useEffect, useRef, useLayoutEffect  } from "react";

const AnimatedHeader = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef(null);
  //const [iteration, setIteration] = useState(0);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleMouseOver = event => {
    let iteration = 0;
  
    clearInterval(intervalRef.current);
  
    intervalRef.current = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return text[index];
          }
      
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
    
      if(iteration >= text.length){ 
        clearInterval(intervalRef.current);
      }
    
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseOut = event => {
    clearInterval(intervalRef.current);
    event.target.innerText = text;
  };

  return (
    <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-value={text}>
      {text}
    </h1>
  );
};

export default AnimatedHeader;
