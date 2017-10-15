const app = "I don't do much.";

// fetch('https://api.github.com/user/repos')
//   .then(res => res.json())
//   .then(json => console.log(json));

const token = '0efaaea0cb5c863eb4bd3cf19ffc760f1cdd3de8';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
