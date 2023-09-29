import React, { useState, useEffect } from 'react';

const NumberCounting = ({ start, end, duration,title}) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      const step = ((end - start) / duration) * 10;
  
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < end) {
            return prevCount + step;
          } else {
            clearInterval(interval);
            return end;
          }
        });
      }, 10);
  
      return () => clearInterval(interval);
    }, [start, end, duration]);
  
    return (
      <div className="number-counter">
        <span className="count">{Math.floor(count)}+</span>
        <p className='numberP'>{title}</p>
      </div>
    );
  };
export default NumberCounting