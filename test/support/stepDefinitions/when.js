/*
 * When Steps
 */

const examplePage = require('../pages/example.page');
const myPage = require('../pages/my.page');

module.exports = function(){

    this.When(/^I enter "([^"]*)" into the search box$/, arg1 => {
        browser.click(examplePage.searchInput);
        browser.clearElement(examplePage.searchInput);
        browser.setValue(examplePage.searchInput, arg1);
        browser.getValue(examplePage.searchInput).should.equal(arg1);
        browser.pause(500);

    });

    this.When(/^I click the search button$/, () => {
        browser.submitForm(examplePage.formClass);
    });

    this.When(/^I click on the project titled "([^"]*)"$/, arg1 => {
      browser.click(myPage.raspiImg);
    })
};
