import React from 'react';
import ReactDOM from 'react';
export default function jbbb() {
  var i = 0;
  var txt = 'Welcome to WebFX';
  var speed = 200;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("root").innerHTML += txt[i];
      i++;
      setTimeout(typeWriter, speed);
    } 
    else {
      i = 0;
      document.getElementById("root").innerHTML = "";
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();
  return (
    <>
    </>
  )
}
// ReactDOM.render(
  // import './sty'
    
  // );
