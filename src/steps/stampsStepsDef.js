import {Given, When, Then} from '@wdio/cucumber-framework';


Given(/^I launch "chrome" browser$/, function(){
    browser.url("https://print.stamps.com/Webpostage/default2.aspx?");
});


//not finished - Not sure why given error, undeterimed string literal
// When(/^I go to "https://print.stamps.com/Webpostage/default2.aspx?"$/, function(){
//     browser.url("https://print.stamps.com/Webpostage/default2.aspx?");
// });


Then(/^I expect URL to contain "print.stamps.com"$/, function(){
    var siteUrl = browser.getUrl();
    console.log("Url is: " + siteUrl);
    expect(siteUrl).toHaveUrlContaining('print.stamps.com');
});

When(/^I set Print On to "Stamps"$/, function(){
    browser.element("//input[@id='printmediadroplist-1038-inputEl']").click();
});

When(/^I set Serial Number to "C12345"$/, function(){
    browser.element("//input[@id='sdc-mainpanel-nsserialtextfield-inputEl']").setValue("C12345");
});

When(/^I set Mail From ZIP to "94102"$/, function(){
    browser.element("//input[@id='unauthMailFromZip-1048-inputEl']").setValue("94102");
    const zipCodeField = $("//input[@id='unauthMailFromZip-1048-inputEl']");
    expect(zipCodeField).toHaveValueContaining('94102');
});

When(/^I set Mail To Country to "Canada"$/, function(){
    browser.element("//input[@name='ShipCountryCode']").setValue("Canada");
});

When(/^When I set Weight lbs to "1" and oz to "1"$/, function(){
    browser.element("//div[@id='ext-element-6]").click();
    browser.element("//div[@id='ext-element-8']").click();
});

Then(/^I expect that Weight lbs is "1"$/, function(){
    const weightF = $('[name="WeightLbs"]');
    expect(weightF).toHaveValueContaining('1');
});

Then(/^I set service to "Letter"$/, function(){
    browser.element("//div[@id='sdc-mainpanel-servicedroplist-trigger-picker']");
    browser.element("//td[@class='x-boundlist-item-text' and contains(text(),'Letter')]").click();

});