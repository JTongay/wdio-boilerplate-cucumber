/*
 * Given Steps
 */

const examplePage = require('../pages/example.page');
const myPage = require('../pages/my.page');

module.exports = function(){

    this.Given(/^I am on the search page$/, () => {
        browser.url(examplePage.googleUrl);
        browser.getTitle().should.equal(examplePage.googlePageTitle);
    });

    this.Given(/^I am on Joey's portfolio$/, () => {
        browser.url(myPage.myUrl);
    })
};
