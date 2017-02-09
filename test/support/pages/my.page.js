const Page = require('./page');

const myPage = Object.create(Page, {

  myUrl:        {value: 'http://josephtongay.me'},
  pokeStayImg:  {value: '#pokestay-img'},
  raspiImg:     {value: '#raspi-img'},
  digidexImg:   {value: '#digidex-img'},
  powerRankImg: {value: '#power-img'},
  myTitle:      {value: 'Joseph Tongay'},
  h1Tag:        {value: 'h1'},

});

module.exports = myPage;
