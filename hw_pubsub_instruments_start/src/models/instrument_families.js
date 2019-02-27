const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(instrumentsData) {
  this.instrumentsData = instrumentsData;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('allInstrumentsReady', this.instrumentsData);
  console.log(this.instrumentsData);

  PubSub.subscribe('SelectInstrumentView:change', (evt) => {
    const chosenInstrumentName = evt.detail;
    this.publishFamilyDetail(chosenInstrumentName);
    console.log(chosenInstrumentName);
  });
};

InstrumentFamilies.prototype.publishFamilyDetail = function(selectedIndex) {
  const selectedFamily = this.instrumentsData[selectedIndex];
  PubSub.publish('instrumentReady', selectedFamily)
};

module.exports = InstrumentFamilies;
