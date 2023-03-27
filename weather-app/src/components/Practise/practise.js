import React, { useState } from 'react';
import './practise.css';

function HoverAnimation() {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`container ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis neque eu dui vulputate, ut gravida
        turpis malesuada. Vivamus sollicitudin quis lectus at tempor.
      </p>
      <div className="readmore">
        <a href="#">Read More</a>
      </div>
    </div>
  );
}

export default HoverAnimation;
