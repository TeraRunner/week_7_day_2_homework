const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(instrumentsData) {
  this.instrumentsData = instrumentsData;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('allInstrumentsReady', this.instrumentsData);
  console.log(this.instrumentsData);

  PubSub.subscribe('SelectInstrumentView:change', (evt) => {
    const chosenInstrumentName = evt.detail;
    const selectedInstrument = this.findByName(chosenInstrumentName);
    PubSub.publish('instrumentReady', selectedInstrument);
    console.log(selectedInstrument);
  });
};

InstrumentFamilies.prototype.findByName = function(searchName) {
  const foundInstrument = this.instrumentsData.find((currentInstrument) => {
    return currentInstrument.name === searchName;
  });
  return foundInstrument;
};

module.exports = InstrumentFamilies;
