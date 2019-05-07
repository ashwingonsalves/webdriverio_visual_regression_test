describe("Google Search!!", function () {
    it("Search for BrowserStack", function () {
      browser.url('https://www.google.com/ncr');
  
      var title = browser.getTitle()
      expect(title).to.equal('Google');

      var results = browser.checkElement('[name="btnK"]')
      expect(results[0].isWithinMisMatchTolerance).to.be.true;

      $('[name="q"]').setValue('BrowserStack');
      $('[name="btnK"]').click();
      browser.pause(5000);
      var title = browser.getTitle()
      expect(title).to.equal("BrowserStack - Google Search");
    });
  });
  