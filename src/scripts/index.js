// Import styles into JS
import 'normalize.css';
import '../styles/index.scss';

// Import Material Design Components modules
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCRipple } from '@material/ripple';

// In order to add image files to your page via Webpack you need to import them first
import webpackLogo from '../img/icon-square-big.png';
import materialDesignLogo from '../img/material-design-logo.png';
import javaScriptLogo from '../img/JavaScript-logo.png';

// Instantiation of Material Design Components
const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
const buttons = document.querySelectorAll('.mdc-button');
buttons.forEach((btn) => {
  // Iterate through all buttons and attach to MDCRipple class
  const rippleButton = new MDCRipple(btn);
  // You can add event listeners on these as well
  rippleButton.listen('click', (event) => {
    console.log(event.target);
  });
});

// Get the height of the Top App Bar component and set the padding-top for <main></main>
const topAppBarHeight = topAppBar.root_.getBoundingClientRect().height;
const main = document.querySelector('main');
main.style.paddingTop = `${topAppBarHeight + 10}px`;

// An example of how to add images to the page from Webpack
// Add the image files to an array so we can iterate over them
const logoArray = [webpackLogo, materialDesignLogo, javaScriptLogo];
const logoDivArray = document.querySelectorAll('div.imageDiv');
logoArray.forEach((logo, index) => {
  // Create a new image --> "new Image(width, height);"
  const logoImage = new Image(200, 200);
  // Add the src data to the new image
  logoImage.src = logo;
  // Optional - Adjust the styles for the parent element of the image
  logoDivArray[index].parentElement.style.justifyContent = 'center';
  logoDivArray[index].parentElement.style.alignItems = 'center';
  logoDivArray[index].parentElement.style.paddingBottom = '10px';
  logoDivArray[index].parentElement.classList.add('mdc-elevation--z4');
  // Append the image to the div
  logoDivArray[index].appendChild(logoImage);
});
