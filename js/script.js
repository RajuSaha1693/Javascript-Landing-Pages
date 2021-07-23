//DOM ELement
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

const showAmPm = true;

//Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

function addZero(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

function setBackground() {
  let today = new Date(),
    hours = today.getHours();

  if (hours < 12) {
    document.body.style.backgroundImage = "url('../images/morning.jpg')";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Morning';
  } else if (hours < 18) {
    document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = "url('../images/night.jpg')";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Your Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
showTime();
setBackground();
getName();
getFocus();
