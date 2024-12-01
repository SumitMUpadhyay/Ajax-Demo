// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same. still get dynamically, behind the scenes.

// const url = './api/people.json';

// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((resp) => {
//     // response object
//     // useful prop and methods
//     // console.log(resp);
//     // convert response into JSON data
//     // returns promise
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// const url = './api/people.json';

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Fetch with function

const url = './api/people.json';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      displayItems(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
