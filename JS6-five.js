setTimeout(() => {
  document.querySelector('#async').innerHTML = `<h2>Async code, Wow!</h2>`;
}, 2000);

const getData = () => {
  const promise = new Promise((res, err) => {
    setTimeout(() => {
      res('Oh My!');
    }, 2000);
  });
  return promise;
};

setTimeout(() => {
  getData()
    .then(res => {
      document.querySelector('#async').innerHTML = `<h1>${res}</h1>`;
      return getData();
    })
    .then(
      res2 =>
        (document.querySelector(
          '#async'
        ).innerHTML = `<p>I am a nested Promise! ${res2}</p>`)
    );
}, 4000);
