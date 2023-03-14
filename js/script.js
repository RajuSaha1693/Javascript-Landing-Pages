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
    document.body.style.backgroundImage = "url('../Javascript-Landing-Pages/images/morning.jpg')";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Morning';
  } else if (hours < 18) {
    document.body.style.backgroundImage = "url('../Javascript-Landing-Pages/images/afternoon.jpg')";
    document.body.style.backgroundSize = 'cover';
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = "url('../Javascript-Landing-Pages/images/night.jpg')";
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


//Mocks Comment
function mockFetch(url, options) {
    return new Promise((resolve, reject) => {
      // You can customize the response based on the URL and options if needed
      if (url === '/api/users' && options.method === 'GET') {
        const data = {
          users: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' }
          ]
        };
        const headers = new Headers({ 'X-Custom-Header': 'foo' });
        const status = 200;
        const response = new Response(JSON.stringify(data), { headers, status });
        resolve(response);
      } else {
        reject(new Error(`Invalid URL or options: ${url} ${JSON.stringify(options)}`));
      }
    });
  }

  mockFetch('/api/users', { method: 'GET' })
  .then(response => {
    console.log(response.headers.get('X-Custom-Header')); // Output: foo
    console.log(response.status); // Output: 200
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));


  function mockFetch(url, options) {
    return new Promise((resolve, reject) => {
      // You can customize the response based on the URL and options if needed
      if (url.startsWith('/api/users') && options.method === 'GET') {
        const searchParams = new URLSearchParams(url.slice('/api/users'.length));
        const id = searchParams.get('id');
        const data = id
          ? { id, name: `User ${id}` }
          : { users: [
              { id: 1, name: 'John Doe' },
              { id: 2, name: 'Jane Smith' }
            ]
          };
        const headers = new Headers({ 'X-Custom-Header': 'foo' });
        const status = 200;
        const response = new Response(JSON.stringify(data), { headers, status });
        resolve(response);
      } else {
        reject(new Error(`Invalid URL or options: ${url} ${JSON.stringify(options)}`));
      }
    });
  }

  
  mockFetch('/api/users?id=1', { method: 'GET' })
  .then(response => {
    console.log(response.headers.get('X-Custom-Header')); // Output: foo
    console.log(response.status); // Output: 200
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));


  function mockFetch(url, options) {
    return new Promise((resolve, reject) => {
      // You can customize the response based on the URL and options if needed
      if (url.startsWith('/api/users') && options.method === 'GET') {
        const searchParams = new URLSearchParams(url.slice('/api/users'.length));
        const id = searchParams.get('id');
        const data = id
          ? { id, name: `User ${id}` }
          : { users: [
              { id: 1, name: 'John Doe' },
              { id: 2, name: 'Jane Smith' }
            ]
          };
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer myToken'
        });
        const status = 200;
        const response = new Response(JSON.stringify(data), { headers, status });
        resolve(response);
      } else {
        reject(new Error(`Invalid URL or options: ${url} ${JSON.stringify(options)}`));
      }
    });
  }

  
  mockFetch('/api/users?id=1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer myToken'
    }
  })
    .then(response => {
      console.log(response.headers.get('Content-Type')); // Output: application/json
      console.log(response.headers.get('Authorization')); // Output: Bearer myToken
      console.log(response.status); // Output: 200
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

    

    function mockFetch(url, options) {
        return new Promise((resolve, reject) => {
          // You can customize the response based on the URL and options if needed
          if (url.startsWith('/api/users') && options.method === 'GET') {
            const searchParams = new URLSearchParams(url.slice('/api/users'.length));
            const id = searchParams.get('id');
            const authToken = options.headers.get('Authorization');
            if (authToken !== 'Bearer myToken') {
              reject(new Error('Invalid Authorization token'));
              return;
            }
            const data = id
              ? { id, name: `User ${id}` }
              : { users: [
                  { id: 1, name: 'John Doe' },
                  { id: 2, name: 'Jane Smith' }
                ]
              };
            const headers = new Headers({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer myToken'
            });
            const status = 200;
            const response = new Response(JSON.stringify(data), { headers, status });
            resolve(response);
          } else {
            reject(new Error(`Invalid URL or options: ${url} ${JSON.stringify(options)}`));
          }
        });
      }

      
      ///Again

      function mockFetch(url, options) {
        return new Promise((resolve, reject) => {
          // You can customize the response based on the URL and options if needed
          if (url.startsWith('/api/users') && options.method === 'GET') {
            const searchParams = new URLSearchParams(url.slice('/api/users'.length));
            const id = searchParams.get('id');
            const authToken = options.headers.get('Authorization');
            
            if (authToken !== 'myToken') {
              const error = new Error('Invalid Authorization token');
              error.status = 401;
              reject(error);
              return;
            }
            
            const data = id
              ? { id, name: `User ${id}` }
              : { users: [
                  { id: 1, name: 'John Doe' },
                  { id: 2, name: 'Jane Smith' }
                ]
              };
            const headers = new Headers({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer myToken'
            });
            const status = 200;
            const response = new Response(JSON.stringify(data), { headers, status });
            resolve(response);
          } else {
            reject(new Error(`Invalid URL or options: ${url} ${JSON.stringify(options)}`));
          }
        });
      }

      
      mockFetch('/api/users?id=1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer myToken'
        }
      })
        .then(response => {
          console.log(response.headers.get('Content-Type')); // Output: application/json
          console.log(response.headers.get('Authorization')); // Output: Bearer myToken
          console.log(response.status); // Output: 200
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));

        
//Again
function mockFetch(url, options) {
    return new Promise((resolve, reject) => {
      // You can customize the response based on the URL and options if needed
      if (url.startsWith('/api/users') && options.method === 'GET') {
        const searchParams = new URLSearchParams(url.slice('/api/users'.length));
        const id = searchParams.get('id');
        const name = searchParams.get('name');
        const authToken = options.headers.get('Authorization');
        
        if (authToken !== 'myToken') {
          const error = new Error('Invalid Authorization token');
          error.status = 401;
          reject(error);
          return;
        }
        
        let data = [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
          { id: 3, name: 'Bob Johnson' }
        ];
        
        if (id) {
          data = data.filter(user => user.id === Number(id));
        }
        
        if (name) {
          data = data.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
        }
        
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer myToken'
        });
        const status = 200;
        const response = new Response(JSON.stringify({ users: data }), { headers, status });
        resolve(response);
      } else {
        reject(new Error(`Invalid URL or options: ${url} ${JSON.stringify(options)}`));
      }
    });
  }

  
  mockFetch('/api/users?id=1&name=doe', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer myToken'
    }
  })
    .then(response => {
      console.log(response.headers.get('Content-Type')); // Output: application/json
      console.log(response.headers.get('Authorization')); // Output: Bearer myToken
      console.log(response.status); // Output: 200
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
  

