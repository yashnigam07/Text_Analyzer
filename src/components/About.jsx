import React, { useState } from 'react';

export default function About() {
  const [mode, setMode] = useState('light');
  
  const getClasses = (mode) => {
    switch (mode) {
      case 'dark':
        return 'text-white bg-black border-white';
      case 'light':
        return 'text-black bg-white border-black';
      case 'blue':
        return 'text-white bg-blue-600 border-white';
      case 'green':
        return 'text-white bg-green-700 border-white';
      default:
        return 'text-black bg-white border-black';
    }
  };

  const [classes, setClasses] = useState(getClasses(mode));
  const [btntext, setBtntext] = useState('Enable Dark Mode');

  const toggleStyle = (newMode) => {
    setMode(newMode);
    setClasses(getClasses(newMode));
    setBtntext(`Enable ${newMode === 'light' ? 'dark' : 'light'} mode`);
  };

  return (
    <div className={`container p-4 rounded-lg border ${classes}`}>
      <h1 className='my-3 text-3xl font-bold'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className={`accordion-item border ${classes}`}>
          <h2 className="accordion-header" id="headingOne">
            <button 
              className={`accordion-button ${classes} focus:outline-none`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="true" 
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className={`accordion-body ${classes}`}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
            </div>
          </div>
        </div>
        <div className={`accordion-item border ${classes}`}>
          <h2 className="accordion-header" id="headingTwo">
            <button 
              className={`accordion-button collapsed ${classes} focus:outline-none`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className={`accordion-body ${classes}`}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            </div>
          </div>
        </div>
        <div className={`accordion-item border ${classes}`}>
          <h2 className="accordion-header" id="headingThree">
            <button 
              className={`accordion-button collapsed ${classes} focus:outline-none`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree" 
              aria-expanded="false" 
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className={`accordion-body ${classes}`}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            </div>
          </div>
        </div>
      </div>
      <div className="buttoncontainer my-3 flex space-x-2">
        <button onClick={() => toggleStyle('dark')} className="py-2 px-4 rounded bg-black text-white hover:bg-gray-700">
          Enable Dark Mode
        </button>
        <button onClick={() => toggleStyle('light')} className="py-2 px-4 rounded bg-white text-black border hover:bg-gray-200">
          Enable Light Mode
        </button>
        <button onClick={() => toggleStyle('blue')} className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-800">
          Enable Blue Mode
        </button>
        <button onClick={() => toggleStyle('green')} className="py-2 px-4 rounded bg-green-700 text-white hover:bg-green-900">
          Enable Green Mode
        </button>
      </div>
    </div>
  );
}
