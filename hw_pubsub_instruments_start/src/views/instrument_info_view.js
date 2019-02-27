const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('instrumentReady', (evt) => {
    const instrumentData = evt.detail;
    console.log(instrumentData);
    this.render(instrumentData);
  });
};

InstrumentInfoView.prototype.render = function(instrument) {
  this.container.innerHTML = '';

  const heading = this.createHeading(instrument);
  const description = this.createDescription(instrument);
  const instrumentList = this.createInstrumentList(instrument);

  this.container.appendChild(heading);
  this.container.appendChild(description);
  this.container.appendChild(instrumentList);
};

InstrumentInfoView.prototype.createHeading = function(instrument) {
  const heading = document.createElement('h2');
  heading.textContent = instrument.name;
  return heading;
};

InstrumentInfoView.prototype.createDescription = function(instrument) {
  const description = document.createElement('p');
  heading.textContent = instrument.description;
  return description;
};

InstrumentInfoView.prototype.createInstrumentList = function(instrument) {
  const instrumentList = document.createElement('ul');

  for (let i = 0; i < this.instrument.length; i++) {
    const liInstrument = this.createLi('i', instrumentList);
  }

  return instrumentList;
};

InstrumentInfoView.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

module.exports = InstrumentInfoView;
