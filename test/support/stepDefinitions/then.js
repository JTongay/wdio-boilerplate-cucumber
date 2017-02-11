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
      console.log(myPage.h1Tag);
      var innerHTML = browser.getHTML('h1', false)
      console.log(innerHTML[2]);
      return browser.getHTML('h1', false).should.equal(arg1);
    })
};
