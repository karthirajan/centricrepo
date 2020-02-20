$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/NewSeason.feature");
formatter.feature({
  "name": "Create New season in qakripya.com",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User creates New season for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "User launches centric application",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects language \"\u003clanguage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "verify user screen",
  "keyword": "And "
});
formatter.step({
  "name": "Click style tab and get the listed season name in the style tab",
  "keyword": "And "
});
formatter.step({
  "name": "User create New season with mandatory deatails for season creation \"\u003cstyle\u003e\",\"\u003cscode\u003e\",\"\u003csdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click New Brand",
  "keyword": "Then "
});
formatter.step({
  "name": "Create Brand by providing valid and mandatory data \"\u003cbrand\u003e\",\"\u003cbcode\u003e\",\"\u003cbdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Save the New Brand which was created",
  "keyword": "Then "
});
formatter.step({
  "name": "Click New department by providing valid data  \"\u003cdept\u003e\",\"\u003cdcode\u003e\",\"\u003cddescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Save the New department which was created",
  "keyword": "Then "
});
formatter.step({
  "name": "Click New collection",
  "keyword": "Then "
});
formatter.step({
  "name": "Create collection by providing valida and mandatory details \"\u003ccollection\u003e\",\"\u003cccode\u003e\",\"\u003ccdesription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Save the collection which was created",
  "keyword": "Then "
});
formatter.step({
  "name": "Click New style",
  "keyword": "Then "
});
formatter.step({
  "name": "Create Style followed by its style Type \"\u003cstyletype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "select the image from the avilable resource",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify the created season, Brand, Department, Collection and Style which was created.",
  "keyword": "Then "
});
formatter.step({
  "name": "Logout from the Application",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "language",
        "style",
        "scode",
        "sdescription",
        "brand",
        "bcode",
        "bdescription",
        "dept",
        "dcode",
        "ddescription",
        "collection",
        "ccode",
        "cdesription",
        "styletype"
      ]
    },
    {
      "cells": [
        "Italian (Italiano)",
        "autumn1",
        "100",
        "new model",
        "brand",
        "101",
        "otto",
        "dept",
        "ot01",
        "shirts",
        "collection",
        "Cot001",
        "cotton",
        "Apparel"
      ]
    },
    {
      "cells": [
        "English - USA",
        "spring2",
        "101",
        "new model",
        "brand",
        "101",
        "otto",
        "dept",
        "ot01",
        "T-shirts",
        "collection",
        "Cot001",
        "cotton",
        "Apparel"
      ]
    },
    {
      "cells": [
        "English - UK",
        "winter1",
        "102",
        "new model",
        "brand",
        "101",
        "otto",
        "dept",
        "ot01",
        "pants",
        "collection",
        "Cot001",
        "cotton",
        "Apparel"
      ]
    },
    {
      "cells": [
        "Bengali (বাংলা)",
        "summer1",
        "103",
        "new model",
        "brand",
        "101",
        "otto",
        "dept",
        "ot01",
        "shorts",
        "collection",
        "Cot001",
        "cotton",
        "Apparel"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User creates New season for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches centric application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_launches_centric_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects language \"Italian (Italiano)\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_selects_language(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//span[contains(@data-csi-automation,\u0027PageUser\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-71DVFI8\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.centric.stepdefinition.HomePageSteps.user_selects_language(HomePageSteps.java:22)\r\n\tat ✽.User selects language \"Italian (Italiano)\"(src/main/resources/Features/NewSeason.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify user screen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.verify_user_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click style tab and get the listed season name in the style tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.click_style_tab_and_get_the_listed_season_name_in_the_style_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User create New season with mandatory deatails for season creation \"autumn1\",\"100\",\"new model\"",
  "keyword": "When "
});
formatter.match({
  "location": "StylePageSteps.user_create_New_season_with_mandatory_deatails_for_season_creation(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New Brand",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_Brand()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create Brand by providing valid and mandatory data \"brand\",\"101\",\"otto\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Brand_by_providing_valid_and_mandatory_data(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the New Brand which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_Brand_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New department by providing valid data  \"dept\",\"ot01\",\"shirts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_department_by_providing_valid_data(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the New department which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_department_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New collection",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_collection()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create collection by providing valida and mandatory details \"collection\",\"Cot001\",\"cotton\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_collection_by_providing_valida_and_mandatory_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the collection which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_collection_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New style",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_style()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create Style followed by its style Type \"Apparel\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Style_followed_by_its_style_Type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the image from the avilable resource",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.select_the_image_from_the_avilable_resource()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the created season, Brand, Department, Collection and Style which was created.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.verify_the_created_season_Brand_Department_Collection_and_Style_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Logout from the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.logout_from_the_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates New season for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches centric application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_launches_centric_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects language \"English - USA\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_selects_language(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//span[contains(@data-csi-automation,\u0027PageUser\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-71DVFI8\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.centric.stepdefinition.HomePageSteps.user_selects_language(HomePageSteps.java:22)\r\n\tat ✽.User selects language \"English - USA\"(src/main/resources/Features/NewSeason.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify user screen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.verify_user_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click style tab and get the listed season name in the style tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.click_style_tab_and_get_the_listed_season_name_in_the_style_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User create New season with mandatory deatails for season creation \"spring2\",\"101\",\"new model\"",
  "keyword": "When "
});
formatter.match({
  "location": "StylePageSteps.user_create_New_season_with_mandatory_deatails_for_season_creation(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New Brand",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_Brand()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create Brand by providing valid and mandatory data \"brand\",\"101\",\"otto\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Brand_by_providing_valid_and_mandatory_data(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the New Brand which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_Brand_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New department by providing valid data  \"dept\",\"ot01\",\"T-shirts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_department_by_providing_valid_data(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the New department which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_department_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New collection",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_collection()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create collection by providing valida and mandatory details \"collection\",\"Cot001\",\"cotton\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_collection_by_providing_valida_and_mandatory_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the collection which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_collection_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New style",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_style()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create Style followed by its style Type \"Apparel\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Style_followed_by_its_style_Type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the image from the avilable resource",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.select_the_image_from_the_avilable_resource()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the created season, Brand, Department, Collection and Style which was created.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.verify_the_created_season_Brand_Department_Collection_and_Style_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Logout from the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.logout_from_the_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates New season for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches centric application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_launches_centric_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects language \"English - UK\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_selects_language(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027User Profile\u0027)]\"}\n  (Session info: chrome\u003d80.0.3987.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-71DVFI8\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.116, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\abdul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65030}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8487cc966d86dfce9fb4c70f440d6b8b\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027User Profile\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.centric.stepdefinition.HomePageSteps.SelectLanguage(HomePageSteps.java:49)\r\n\tat com.centric.stepdefinition.HomePageSteps.user_selects_language(HomePageSteps.java:25)\r\n\tat ✽.User selects language \"English - UK\"(src/main/resources/Features/NewSeason.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify user screen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.verify_user_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click style tab and get the listed season name in the style tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.click_style_tab_and_get_the_listed_season_name_in_the_style_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User create New season with mandatory deatails for season creation \"winter1\",\"102\",\"new model\"",
  "keyword": "When "
});
formatter.match({
  "location": "StylePageSteps.user_create_New_season_with_mandatory_deatails_for_season_creation(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New Brand",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_Brand()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create Brand by providing valid and mandatory data \"brand\",\"101\",\"otto\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Brand_by_providing_valid_and_mandatory_data(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the New Brand which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_Brand_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New department by providing valid data  \"dept\",\"ot01\",\"pants\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_department_by_providing_valid_data(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the New department which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_department_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New collection",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_collection()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create collection by providing valida and mandatory details \"collection\",\"Cot001\",\"cotton\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_collection_by_providing_valida_and_mandatory_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Save the collection which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_collection_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New style",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_style()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Create Style followed by its style Type \"Apparel\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Style_followed_by_its_style_Type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the image from the avilable resource",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.select_the_image_from_the_avilable_resource()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the created season, Brand, Department, Collection and Style which was created.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.verify_the_created_season_Brand_Department_Collection_and_Style_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Logout from the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.logout_from_the_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User creates New season for a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches centric application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.user_launches_centric_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects language \"Bengali (বাংলা)\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_selects_language(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify user screen",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.verify_user_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click style tab and get the listed season name in the style tab",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.click_style_tab_and_get_the_listed_season_name_in_the_style_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User create New season with mandatory deatails for season creation \"summer1\",\"103\",\"new model\"",
  "keyword": "When "
});
formatter.match({
  "location": "StylePageSteps.user_create_New_season_with_mandatory_deatails_for_season_creation(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New Brand",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_Brand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create Brand by providing valid and mandatory data \"brand\",\"101\",\"otto\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Brand_by_providing_valid_and_mandatory_data(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Save the New Brand which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_Brand_which_was_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New department by providing valid data  \"dept\",\"ot01\",\"shorts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_department_by_providing_valid_data(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Save the New department which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_New_department_which_was_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New collection",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_collection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create collection by providing valida and mandatory details \"collection\",\"Cot001\",\"cotton\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_collection_by_providing_valida_and_mandatory_details(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Save the collection which was created",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.save_the_collection_which_was_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New style",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_style()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create Style followed by its style Type \"Apparel\"",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Style_followed_by_its_style_Type(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Go to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.go_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select the image from the avilable resource",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.select_the_image_from_the_avilable_resource()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027attrImage\u0027])[1]/img\"}\n  (Session info: chrome\u003d80.0.3987.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027DESKTOP-71DVFI8\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.116, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\abdul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65080}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1ff802d493ffca454154ad5621672ee6\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027attrImage\u0027])[1]/img}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat com.centric.resources.Commonactions.click(Commonactions.java:67)\r\n\tat com.centric.stepdefinition.StylePageSteps.select_the_image_from_the_avilable_resource(StylePageSteps.java:132)\r\n\tat ✽.select the image from the avilable resource(src/main/resources/Features/NewSeason.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify the created season, Brand, Department, Collection and Style which was created.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.verify_the_created_season_Brand_Department_Collection_and_Style_which_was_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Logout from the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.logout_from_the_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});