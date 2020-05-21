// Import styles into JS
import 'normalize.css';
import '../styles/index.scss';

// Import Material Design Components modules
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCRipple } from '@material/ripple';

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
