import 'normalize.css';
import './styles/main.scss';

const anchors = document.querySelectorAll('.js-scroll-to');

const select = () => {
  const elements = document.querySelectorAll('.js-choice');

  elements.forEach(element => {
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
      position: 'bottom',
      allowHTML: true,
    });
  });
};

const burgerController = ({btnOpen, btnClose, menu, activeClass}) => {
  const burgerBtn = document.querySelector(btnOpen);
  const burgerMenu = document.querySelector(menu);

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.add(activeClass);
  });
  
  burgerMenu.addEventListener('click', event => {
    const target = event.target;
  
    if(target === burgerMenu || target.closest(btnClose)) {    
      burgerMenu.classList.remove(activeClass);
    }
  });
};

const modalController = ({modal, btnOpen, btnClose}) => {
  const modalBtns = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  `;

  const closeModal = event => {
    const target = event.target;
  
    if(target === modalElem || target.closest(btnClose)) {    
      modalElem.style.opacity = '0';
  
      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, 300);

      enabledScroll();
    }
  };
  
  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = '1';

    disabledScroll();
  };

  const disabledScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
  
    document.body.dbScrollY = window.scrollY;
  
    document.body.style.cssText = `
      position: fixed;
      top: ${-window.scrollY}px;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      padding-right: ${widthScroll}px;
    `;
  };
  
  const enabledScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
      top: document.body.dbScrollY,
    })
  };
  
  modalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  
  modalElem.addEventListener('click', closeModal);
}

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

select();

burgerController({
  btnOpen: '.js-menu-open',
  btnClose: '.js-menu-close',
  menu: '.js-mobile-menu',
  activeClass: 'menu_open'
});

modalController({
  modal: '.modal',
  btnOpen: '.discussion',
  btnClose: '.js-modal-close'
});






