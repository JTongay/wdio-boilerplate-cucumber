/*
 * Then Steps
 */

const examplePage = require('../pages/example.page');
const myPage = require('../pages/my.page');

module.exports = function(){

    this.Then(/^I should see a list of search results$/, () => {
        browser.pause(2000);
        browser.waitForVisible(examplePage.resultsList);
        return browser.isVisible(examplePage.resultsList).should.be.true;
    });

    this.Then(/^I should see the title "([^"]*)"$/, arg1 => {
      return browser.getTitle().should.equal(myPage.myTitle);
    })

    this.Then(/^I should see the name "([^"]*)"$/, arg1 => {
      return browser.getValue(myPage.h1Tag).should.equal(arg1);
    })
};
