// utils/ga.js
import ReactGA from 'react-ga';
      {/* test 1 id is using  from uswa account */}
// new property email and in pink pather
// Initialize Google Analytics with the Measurement ID
export const initGA = () => {
  // ReactGA.initialize('G-SXP1NBWMP4');
  ReactGA.initialize('UA-280597789-2');
};

// Log button click event with the button name
// export const logButtonClick = (buttonName) => {
//   ReactGA.event({
//     category: 'User Interaction',
//     action: 'Button Click',
//     label: buttonName,
//   });
// };
