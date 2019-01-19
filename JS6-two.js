const merc = {
  make: 'Mercedes',
  model: 'E350 Coupe`',
  getCar() {
    return `Car = ${this.make} ${this.model}`;
  }
};

document.querySelector('#carTitle').innerHTML = `<p>${merc.getCar()}</p>`;
