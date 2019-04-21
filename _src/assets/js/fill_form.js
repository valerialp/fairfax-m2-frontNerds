
// NAME INPUT
const setName = document.querySelector('#name');
const cardUserName = document.querySelector('.card-user__name');

function getUserName() {
  const userName = setName.value;
  userInfo.name = userName;
  // saveDataLs();
  //llamo al nombre del objeto y a su elemento para sustituirlo en el object y luego llamo a la funcion que lo guarda en LocalStorage (y así con todas)
  cardUserName.innerHTML = userName;
  if (userName === '') {
    cardUserName.innerHTML = 'User name';
  }
  console.log(userInfo);
}

setName.addEventListener('keyup', getUserName);

// JOB INPUT
const setJob = document.querySelector('#job');
const cardUserJob = document.querySelector('.card-user__position');

function getUserJob() {
  const userJob = setJob.value;
  userInfo.job = userJob;
  saveDataLs();
  cardUserJob.innerHTML = userJob;
  if (userJob === '') {
    cardUserJob.innerHTML = 'User job';
    
  }
 console.log(userInfo);
}

setJob.addEventListener('keyup', getUserJob);

//Email
const inputEmailEl = document.querySelector('#email');
let linkEmailEl = document.querySelector('.email');


function handlerEmail() {
  const inputValue = inputEmailEl.value;
  userInfo.email = inputValue;
  saveDataLs();
  linkEmailEl.href = `mailto:${inputValue}`;
    console.log(linkEmailEl);
  
}

inputEmailEl.addEventListener('keyup', handlerEmail);

//PHONE

const inputTel = document.getElementById('phone');
const linkTel = document.getElementById('phone-link');
function changeLinkTel() {
linkTel.setAttribute('href', 'tel: +34' + inputTel.value);
const telValue = inputTel.value;
userInfo.phone = telValue;
saveDataLs();
console.log(userInfo);
}

inputTel.addEventListener('keyup', changeLinkTel);

// GITHUB
const setGitHub = document.querySelector('#gitHub');
const cardUserGitHub = document.querySelector('#gitHub-link');
const iconStyle = document.querySelector('#gitHubEl');

function getGitHub() {
  const userGitHub = setGitHub.value;
  userInfo.github = userGitHub;
  saveDataLs();
  cardUserGitHub.href = `https://github.com/${userGitHub}`;
  if (userGitHub !== '') {
    iconStyle.classList.add('card__item-list-default');
  }
  console.log(userInfo);
}

setGitHub.addEventListener('keyup', getGitHub);

// USER LINKEDIN

const inputLnkdIn = document.querySelector('#linkedin');
const linkLnkdIn = document.querySelector('.card__link-linkedin');

inputLnkdIn.addEventListener('keyup', handleInputKeyup);

function handleInputKeyup() {
  const linkedinInput = inputLnkdIn;
  const inputValueLnkdIn = linkedinInput.value;
  userInfo.linkedin = inputValueLnkdIn;
  saveDataLs();
  linkLnkdIn.href = inputValueLnkdIn;
  console.log(userInfo);
}
