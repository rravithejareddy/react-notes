import React from 'react';

function About() {
  return (
    <React.Fragment>
      <h2>About React Notes app</h2>
      <p style={paraStyle}>
      This is a simple notes app!
      </p>
     
    </React.Fragment>
  );
}

const paraStyle = {
  margin: '10px 0'
};

export default About;
