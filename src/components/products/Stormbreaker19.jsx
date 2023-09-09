import React, { useRef } from 'react';
import './Products.css';
import '../home/Home.css';
import '../home/homecomponents/HomeComponent.css';


function Stormbreaker19() {
  const containerRef = useRef(null);

  const scrollToSpecs = () => {
    // Replace 'specs' with the ID of the div you want to scroll to
    const specsDiv = document.getElementById('specs');
    if (specsDiv) {
      specsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLayout = () => {
    // Replace 'layout' with the ID of the div you want to scroll to
    const layoutDiv = document.getElementById('layout');
    if (layoutDiv) {
      layoutDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <div className="component">
        <div>
          <h1 className='Product-header'>Stormbreaker19</h1>
          <div className="button-container">
            <button onClick={scrollToLayout} className="btn hover-border-1">Layout</button>
            <button onClick={scrollToSpecs} className="btn hover-border-1">Specs</button>
          </div>
        </div>
      </div>
      <div className="component">
        Description
      </div>
      <div className="component">
        On the inside
      </div>
      <div className="component">
        On the outside
      </div>
      <div className="component" id='layout'>
        The layout 3D
      </div>
      <div className="component" id='specs'>
        Specs menu
      </div>
    </div>
  )
}

export default Stormbreaker19;
