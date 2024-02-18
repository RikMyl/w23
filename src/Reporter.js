import React from 'react';

const Reporter = (props) => (
  <div>
    {props.name}: {props.children}
    {props.image && <img src={props.image} alt="Mörkö" />}
  </div>
);

export default Reporter;