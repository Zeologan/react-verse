import React, { useState } from 'react';
import './Card.css';
export default function Card(props) {

  //---------- Follow and unfollow 
  const [follow, setFollow] = useState('Follow')
  function clickHandler() {

    //using terary operator------
    let status = follow === 'Follow' ? 'Requested' : "Follow";
    setFollow(status)
  }


// ----------------------------------------------------------------------------------
  // Using External Css in jsx 
  return (
    <div className='card'>
      <div className='profileImg'><img src={props.imgP} alt='no-img' /></div>
      <p id='exit'>x</p>
      <h4>{props.name}</h4>
      <p>bio</p>
      <button className="btn" onClick={clickHandler}>{follow}</button>
    </div>
  )
}

// Note: Inline styles in React can't use pseudo-classes. Use external stylesheets for pseudo-classes, which have global scope.
// Con: If two external stylesheets have the same className, their properties merge because React treats all stylesheets as one in a single-page application.
// different has been show in Card.css and App.css by using smae .btn className
