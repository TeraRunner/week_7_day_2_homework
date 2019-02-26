const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(instrumentsData) {
  this.instrumentsData = instrumentsData;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('allInstrumentsReady', this.instrumentsData);
  console.log(this.instrumentsData);

  PubSub.subscribe('SelectInstrumentView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentDetail(selectedIndex);
    console.log(selectedIndex);
  });
};

InstrumentFamilies.prototype.publishInstrumentDetail = function(instrumentIndex) {
  const selectedInstrument = this.instrumentData[instrumentIndex];
  PubSub.publish('instrumentReady', selectedInstrument)
};

module.exports = InstrumentFamilies;
