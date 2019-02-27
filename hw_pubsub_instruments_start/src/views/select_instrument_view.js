const PubSub = require('../helpers/pub_sub.js');

const SelectInstrumentView = function(instrument) {
  this.instrument = instrument;
};

SelectInstrumentView.prototype.bindEvents = function() {
  PubSub.subscribe('allInstrumentsReady', (evt) => {
    const allInstruments = evt.detail;
    this.populate(allInstruments);
    console.log('Form populated');
  });

  this.instrument.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectInstrumentView:change', selectedIndex);
    console.log(selectedIndex);
  });

};

SelectInstrumentView.prototype.populate = function(instrumentsData) {
  instrumentsData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.instrument.appendChild(option);
    console.log(option);
  });
};

module.exports = SelectInstrumentView;
