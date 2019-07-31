import React from 'react';


const Logo = (props) => {
  return (
    <div>
      <img
        style={props.style}
        src={props.src}
        alt={props.alt}>
      </img>
    </div>
  );
}


export default Logo;