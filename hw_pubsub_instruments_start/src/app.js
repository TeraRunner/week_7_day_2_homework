const instrumentsFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectInstrumentView = require('./views/select_instrument_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', () => {

  console.log('JavaScript Loaded');

  const selectInstrument = document.querySelector('select#instruments-dropdown');
  const instrumentDropdown = new SelectInstrumentView(selectInstrument);
  instrumentDropdown.bindEvents();

  const instrumentsDataSource = new InstrumentFamilies(instrumentsFamilyData);
  instrumentsDataSource.bindEvents();

});
