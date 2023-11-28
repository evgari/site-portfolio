import 'normalize.css';
import './styles/main.scss';

const anchors = document.querySelectorAll('.js-scroll-to');

const select = () => {
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    position: 'bottom',
  });
};

select();

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};





