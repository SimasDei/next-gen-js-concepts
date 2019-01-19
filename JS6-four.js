const desert = {
  iceCream: 'Vanilla ice cream',
  cookies: 'Cookies and Cream',
  cake: 'Strawberry Cheese Cake'
};

// Destructuring
const getDesert = ({ cake }) => {
  console.log(cake);
};

getDesert(desert);

const { cookies, cake } = desert;
document.write(` <h3>${cookies}</h3>  <h3>${cake}</h3>`);

const langs = ['HTML', 'CSS', 'JS', 'NODE'];

const [lang1, lang2] = langs;

document.write(` <span>${lang1}</span> AND <span>${lang2}</span>`);
