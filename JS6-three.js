const languages = ['HTML', 'CSS', 'JS', 'NODE'];
languages.push('JAVA');

languages.map(langauge => document.write(`Language: ${langauge} <br />`));

// Immutability spread & rest operator
const copyLanguages = [...languages];
// console.log(copyLanguages);

const toArray = (...arguments) => {
  return arguments;
};
