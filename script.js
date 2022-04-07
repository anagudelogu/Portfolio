const hamburger = document.querySelector('.nav__icon');
const navMenu = document.querySelector('.nav__links');
const { body } = document;
const links = document.querySelectorAll('.nav__link');
const projectsCardsContainer = document.querySelector('.projects-cards-container');
const projectsContainer = document.querySelector('.projects-container');

function toggle() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('noScroll');
}

function linkClicked() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('noScroll');
}

hamburger.addEventListener('click', toggle);
links.forEach((n) => n.addEventListener('click', linkClicked));

const createDiv = document.createElement('div');
const createH3 = document.createElement('h3');
const createArticle = document.createElement('article');
const createImg = document.createElement('img');
const createUList = document.createElement('ul');
const createButton = document.createElement('button');
const createListItem = document.createElement('li');
const createSpan = document.createElement('span');
const createPara = document.createElement('p');

const projects = [
  {
    id: '0',
    title: ['Project name goes here'],
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/firstProject.svg', 'Project One'],
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    liveVersionLink: ['See Live', './images/unionDark.svg'],
    sourceLink: ['See source', ['./images/ic_githubDark.svg', 'desktopImageSrc']],
    featured: true,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    id: '1',
    title: ['Project name goes here', 'Project name goes...'],
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/secondProject.svg', 'Project Two'],
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    liveVersionLink: ['See Live', './images/unionDark.svg'],
    sourceLink: ['See source', ['./images/ic_githubDark.svg', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    id: '2',
    title: ['Project name goes here'],
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/thirdProject.svg', 'Project Three'],
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    liveVersionLink: ['See Live', './images/unionDark.svg'],
    sourceLink: ['See source', ['./images/ic_githubDark.svg', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    id: '3',
    title: ['Project name goes here', 'Project name goes...'],
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/fourthProject.svg', 'Project Four'],
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    liveVersionLink: ['See Live', './images/unionDark.svg'],
    sourceLink: ['See source', ['./images/ic_githubDark.svg', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    id: '4',
    title: ['Project name goes here', 'Project name goes...'],
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/fifthProject.svg', 'Project Five'],
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    liveVersionLink: ['See Live', './images/unionDark.svg'],
    sourceLink: ['See source', ['./images/ic_githubDark.svg', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    id: '5',
    title: ['Project name goes here', 'Project name goes...'],
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/sixthProject.svg', 'Project Six'],
    desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi', 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    liveVersionLink: ['See Live', './images/unionDark.svg'],
    sourceLink: ['See source', ['./images/ic_githubDark.svg', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
];

function loadCardData() {
  for (let i = 0; i < projects.length; i += 1) {
    const card = createArticle.cloneNode(true);
    const imageElement = createImg.cloneNode(true);
    const textContainer = createDiv.cloneNode(true);
    const cardTitle = createH3.cloneNode(true);
    const list = createUList.cloneNode(true);
    const button = createButton.cloneNode(true);
    const { tech } = projects[i];
    const titleMobile = projects[i].title[0];
    const titleDesktop = projects[i].title[1];
    const imageSrc = projects[i].img[0];
    const imageAlt = projects[i].img[1];
    const btnMobileIcon = projects[i].buttonIcons[0];
    const btnDesktopIcon = projects[i].buttonIcons[1];
    const { featured } = projects[i];

    button.setAttribute('type', 'button');
    imageElement.setAttribute('alt', imageAlt);
    imageElement.src = imageSrc;
    projectsCardsContainer.appendChild(card);
    card.classList.add('project-card', 'bg-dark');
    card.append(imageElement, textContainer);
    textContainer.classList.add('projects-text');
    imageElement.classList.add('project__image');
    textContainer.append(cardTitle, list, button);
    cardTitle.innerText = titleMobile;

    for (let j = 0; j < tech.length; j += 1) {
      const listItem = createListItem.cloneNode(true);
      list.append(listItem);
      listItem.innerText = tech[j];
    }

    button.classList.add('button', 'projects-button', 'btn-bg-dark');
    button.innerText = 'See this project';
    button.setAttribute('id', i);

    if (projects[i].title.length > 1) {
      const cardTitle = document.createElement('h3');
      list.classList.add('small__img');
      cardTitle.classList.add('projects__desktopTitle');
      textContainer.insertBefore(cardTitle, textContainer.children[0]);
      cardTitle.innerText = titleDesktop;
      const listItem = createListItem.cloneNode(true);
      list.appendChild(listItem);
      listItem.innerText = '+1';
    }

    if (i === 0 || i === 5) {
      const buttonMobileIcon = createImg.cloneNode(true);
      const buttonDesktopIcon = createImg.cloneNode(true);
      buttonMobileIcon.classList.add('mob__arrowIcon');
      buttonDesktopIcon.classList.add('desk__arrowIcon');
      buttonMobileIcon.setAttribute('alt', 'Arrow Icon');
      buttonDesktopIcon.setAttribute('alt', 'Arrow Icon');
      buttonMobileIcon.src = btnMobileIcon;
      buttonDesktopIcon.src = btnDesktopIcon;
      button.append(buttonMobileIcon, buttonDesktopIcon);
    } else {
      const buttonMobileIcon = createImg.cloneNode(true);
      buttonMobileIcon.classList.add('mob__arrowIcon');
      buttonMobileIcon.src = btnMobileIcon;
      button.appendChild(buttonMobileIcon);
    }
    if (featured) {
      card.classList.add('project-featured');
    }
  }
}

function loadBackgroundDivs() {
  for (let w = 0; w < 3; w += 1) {
    const div = createDiv.cloneNode(true);
    div.classList.add('background');
    projectsCardsContainer.appendChild(div);
  }
}

loadCardData();
loadBackgroundDivs();

function loadPopup() {
  const projectPopup = createDiv.cloneNode(true);
  const popupClose = createDiv.cloneNode(true);
  const bar1 = createSpan.cloneNode(true);
  const bar2 = createSpan.cloneNode(true);
  const popupTitle = createH3.cloneNode(true);
  const popupList = createUList.cloneNode(true);
  const popupCarouselCont = createDiv.cloneNode(true);
  const carouselLeft = createSpan.cloneNode(true);
  const leftArrow = createImg.cloneNode(true);
  const carouselRight = createSpan.cloneNode(true);
  const rightArrow = createImg.cloneNode(true);
  const popupParagraph = createPara.cloneNode(true);
  const popupParagraph2 = createPara.cloneNode(true);
  const popupBtnContainer = createDiv.cloneNode(true);
  const liveBtn = createButton.cloneNode(true);
  const sourceBtn = createButton.cloneNode(true);
  const popupFlowContainer = createDiv.cloneNode(true);
  const flowLeft = createSpan.cloneNode(true);
  const flowLeftArr = createImg.cloneNode(true);
  const flowRight = createSpan.cloneNode(true);
  const flowRightArr = createImg.cloneNode(true);

  projectsContainer.appendChild(projectPopup);
  projectPopup.classList.add('project__popup');
  projectPopup.append(popupClose, popupTitle, popupList, popupCarouselCont, popupParagraph,
    popupParagraph2, popupBtnContainer, popupFlowContainer);
  popupClose.classList.add('popup__close');
  popupClose.append(bar1, bar2);
  bar1.classList.add('bar');
  bar2.classList.add('bar');
  popupTitle.classList.add('popup__title');
  popupList.classList.add('popup__list');

  for (let i = 0; i < projects[i].tech.length; i += 1) {
    const popupListItem = createListItem.cloneNode(true);
    popupList.appendChild(popupListItem);
    popupListItem.classList.add('popup__listItem');
  }
  popupCarouselCont.classList.add('popup__carouselContainer');

  for (let j = 0; j < 5; j += 1) {
    const carouselImg = createImg.cloneNode(true);
    popupCarouselCont.appendChild(carouselImg);
    carouselImg.classList.add('carousel__image');
    carouselImg.setAttribute('alt', `Project Image ${j + 1}`);
  }

  popupCarouselCont.append(carouselLeft, carouselRight);
  carouselLeft.classList.add('popup__carouselLeftArrow');
  carouselLeft.appendChild(leftArrow);
  leftArrow.src = './images/leftArrow.png';
  carouselRight.classList.add('popup__carouselRightArrow');
  carouselRight.appendChild(rightArrow);
  rightArrow.src = './images/rightArrow.png';
  popupParagraph.classList.add('popup__paragraph');
  popupParagraph2.classList.add('popup__paragraph');
  popupBtnContainer.classList.add('popup__btnContainer');
  popupBtnContainer.append(liveBtn, sourceBtn);
  liveBtn.classList.add('button', 'btn__live', 'btn-bg-dark');
  sourceBtn.classList.add('button', 'btn__source', 'btn-bg-dark');
  popupFlowContainer.classList.add('popup__flowContainer');
  popupFlowContainer.append(flowLeft, flowRight);
  flowLeft.classList.add('flow__left');
  flowLeft.innerText = 'Previous project';
  flowLeft.appendChild(flowLeftArr);
  flowLeftArr.src = './images/ic_arrow_right.svg';
  flowRight.classList.add('flow__right');
  flowRight.innerText = 'Next project';
  flowRight.appendChild(flowRightArr);
  flowRightArr.src = './images/ic_arrow_right.svg';
}

loadPopup();

const popupContainer = document.querySelector('.project__popup');
const popupClose = document.querySelector('.popup__close');
popupClose.addEventListener('click', () => {
  popupContainer.classList.toggle('active');
  body.classList.toggle('noScroll');
});

const buttonsNodeList = document.querySelectorAll('.projects-button');
Array.from(buttonsNodeList).forEach((btn) => btn.addEventListener('click', (event) => {
  projects.filter((project) => {
    if (event.target.id === project.id) {
      const cardTitle = document.querySelector('.popup__title');
      const popTitle = project.title[0];
      cardTitle.innerText = popTitle;

      const cardList = document.querySelector('.popup__list');
      const cardTechnologies = document.querySelectorAll('.popup__listItem');
      for (let k = 0; k < cardTechnologies.length; k += 1) {
        const listItem = cardList.children[k];
        listItem.innerText = project.tech[k];
      }

      const carouselImg = document.querySelectorAll('.carousel__image');
      const carouselCont = document.querySelector('.popup__carouselContainer');
      const imgSrc = project.img[0];
      for (let j = 0; j < carouselImg.length; j += 1) {
        const img = carouselCont.children[j];
        img.src = imgSrc;
      }

      const paragraphs = document.querySelectorAll('.popup__paragraph');
      for (let p = 0; p < paragraphs.length; p += 1) {
        const para = document.querySelector('.project__popup');
        para.children[p + 4].innerText = project.desc[p];
      }

      const btnLiveText = project.liveVersionLink[0];
      const btnLive = document.querySelector('.btn__live');
      btnLive.innerText = btnLiveText;
      const liveIcon = createImg.cloneNode(true);
      btnLive.appendChild(liveIcon);
      liveIcon.setAttribute('alt', 'Icon');
      const liveIconSrc = project.liveVersionLink[1];
      liveIcon.src = liveIconSrc;
      const btnSrc = document.querySelector('.btn__source');
      const srcIconText = project.sourceLink[0];
      btnSrc.innerText = srcIconText;
      const sourceIcon = createImg.cloneNode(true);
      btnSrc.appendChild(sourceIcon);
      sourceIcon.setAttribute('alt', 'Icon');
      const srcIconSrc = project.sourceLink[1][0];
      sourceIcon.src = srcIconSrc;

      popupContainer.classList.toggle('active');
      body.classList.toggle('noScroll');
    }
    return project;
  });
}));

// Form validation

function showMessage(input, msg, type) {
  const message = input.parentNode.querySelector('small');
  message.innerText = msg;
  if (type === false) {
    message.classList.toggle('error');
  }
  return type;
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function showError(input, msg) {
  return showMessage(input, msg, false);
}

function emailValid(input, msg) {
  const emailValue = input.value.trim();
  const emailComparisson = input.value.toLowerCase().trim();

  if (emailValue !== emailComparisson) {
    return showError(input, msg);
  }
  return showSuccess(input);
}
const form = document.querySelector('form');
const EMAIL_INV = 'Please, enter a valid lowercase email.';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailV = emailValid(form.elements.email, EMAIL_INV);
  if (emailV) {
    form.submit();
  }
});
