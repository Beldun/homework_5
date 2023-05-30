import { useState, useEffect } from 'react';

export default function Clicker() {
  const [clickCount, setClickCount] = useState(0);
  const [dollars, setDollars] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    if ((clickCount + 1) % 1000 === 0) {
      setDollars(prevDollars => prevDollars + 1);
    }
  };

  useEffect(() => {
    document.title = `You have ${dollars}$`
  })

  return (
    <div className="clicker-container">
      <h1 className="clicker-heading">Clicker</h1>
      <h3 className='clicker-text'>Every 1000 clicks, you efficiency 1 dollar</h3>
      <button className="clicker-button" onClick={handleClick}>Click me!</button>
      <p className="clicker-text">Total Clicks: {clickCount}</p>
      <p className="clicker-text">Total Dollars: ${dollars}</p>
    </div>
  );
};

