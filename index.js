require("chromedriver");
var webdriver = require("selenium-webdriver");
var web = new webdriver.Builder().forBrowser("chrome").build();
web.get("http://www.baidu.com");
web.findElement({name:"wd"}).sendKeys("动漫图片");
web.findElement({id:"su"}).click();


