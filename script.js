const hamburger = document.querySelector('.nav__icon');
const navMenu = document.querySelector('.nav__links');
const { body } = document;
const links = document.querySelectorAll('.nav__link');
const projectsContainer = document.querySelector('.projects-cards-container');

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

const projects = [
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/firstProject.svg', 'Project One'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveVersionLink: ['See Live', 'imageSrc'],
    sourceLink: ['See source', ['mobileImageSrc', 'desktopImageSrc']],
    featured: true,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/secondProject.svg', 'Project Two'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveVersionLink: ['See Live', 'imageSrc'],
    sourceLink: ['See source', ['mobileImageSrc', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/thirdProject.svg', 'Project Three'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveVersionLink: ['See Live', 'imageSrc'],
    sourceLink: ['See source', ['mobileImageSrc', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/fourthProject.svg', 'Project Four'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveVersionLink: ['See Live', 'imageSrc'],
    sourceLink: ['See source', ['mobileImageSrc', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/fifthProject.svg', 'Project Five'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveVersionLink: ['See Live', 'imageSrc'],
    sourceLink: ['See source', ['mobileImageSrc', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    img: ['./images/sixthProject.svg', 'Project Six'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    liveVersionLink: ['See Live', 'imageSrc'],
    sourceLink: ['See source', ['mobileImageSrc', 'desktopImageSrc']],
    featured: false,
    buttonIcons: ['./images/Union.svg', './images/ic_arrow_right.svg'],
  },
];

function loadCardData() {
  for (let i = 0; i < projects.length; i += 1) {
    const card = document.createElement('article');
    const imageElement = document.createElement('img');
    const textContainer = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const list = document.createElement('ul');
    const button = document.createElement('button');

    const { tech } = projects[i];
    const { title } = projects[i];
    const imageSrc = projects[i].img[0];
    const imageAlt = projects[i].img[1];
    const btnMobileIcon = projects[i].buttonIcons[0];
    const btnDesktopIcon = projects[i].buttonIcons[1];
    const { featured } = projects[i];

    button.setAttribute('type', 'button');
    imageElement.setAttribute('alt', imageAlt);
    imageElement.src = imageSrc;
    projectsContainer.appendChild(card);
    card.classList.add('project-card', 'bg-dark');
    card.append(imageElement, textContainer);
    textContainer.classList.add('projects-text');
    imageElement.classList.add('project__image');
    textContainer.append(cardTitle, list, button);
    cardTitle.innerText = title;

    if (i === 5) {
      const cardTitle = document.createElement('h3');
      textContainer.insertBefore(cardTitle, textContainer.children[1]);
      cardTitle.innerText = 'Project name goes...';
    }
    for (let j = 0; j < tech.length; j += 1) {
      const listItem = document.createElement('li');
      list.append(listItem);
      listItem.innerText = tech[j];
    }

    button.classList.add('button', 'projects-button', 'btn-bg-dark');
    button.innerText = 'See this project';

    if (i === 0 || i === 5) {
      const buttonMobileIcon = document.createElement('img');
      const buttonDesktopIcon = document.createElement('img');
      buttonMobileIcon.classList.add('mob__arrowIcon');
      buttonDesktopIcon.classList.add('desk__arrowIcon');
      buttonMobileIcon.setAttribute('alt', 'Arrow Icon');
      buttonDesktopIcon.setAttribute('alt', 'Arrow Icon');
      buttonMobileIcon.src = btnMobileIcon;
      buttonDesktopIcon.src = btnDesktopIcon;
      button.append(buttonMobileIcon, buttonDesktopIcon);
    } else {
      const buttonMobileIcon = document.createElement('img');
      buttonMobileIcon.classList.add('mob__arrowIcon');
      buttonMobileIcon.src = btnMobileIcon;
      button.appendChild(buttonMobileIcon);
    }
    if (featured) {
      card.classList.add('project-featured');
    }

    if (i === 5) {
      const listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.innerText = '+1';
    }
  }
}

function loadBackgroundDivs() {
  for (let w = 0; w < 3; w += 1) {
    const div = document.createElement('div');
    div.classList.add('background');
    projectsContainer.appendChild(div);
  }
}

loadCardData();
loadBackgroundDivs();