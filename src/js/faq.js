import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.accordion-container', {
  openOnInit: [0],
  beforeOpen: currElement => {
    currElement.classList.add('open');
  },
  beforeClose: currElement => {
    currElement.classList.remove('open');
  },
});
