import React from 'react'
import ReactGA from 'react-ga';
function About() {
  const handleButtonClick = () => {
    // Track button click event
    ReactGA.event('event', 'button_click', {
      event_category: 'Button Interaction',
      event_label: 'Button Clicked',
    });
    alert('Event in about page  ')
  };
  return (
    <div>about
     <button onClick={handleButtonClick}>
      click me 
    </button>
    </div>
  )
}

export default About