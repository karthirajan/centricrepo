$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/NewSeason.feature");
formatter.feature({
  "name": "Create New season in qakripya.com",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User creates New season for a product",
  "description": "",
  "keyword": "Scenario",
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
  "name": "User selects language",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.user_selects_language()"
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
  "name": "User create New season with mandatory deatails for season creation",
  "keyword": "When "
});
formatter.match({
  "location": "StylePageSteps.user_create_New_season_with_mandatory_deatails_for_season_creation()"
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
  "name": "Create Brand by providing valid and mandatory data",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Brand_by_providing_valid_and_mandatory_data()"
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
  "name": "Click New department by providing valid data",
  "keyword": "Then "
});
formatter.match({
  "location": "StylePageSteps.click_New_department_by_providing_valid_data()"
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
  "name": "Create collection by providing valida and mandatory details",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_collection_by_providing_valida_and_mandatory_details()"
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
  "name": "Create Style followed by its style Type",
  "keyword": "And "
});
formatter.match({
  "location": "StylePageSteps.create_Style_followed_by_its_style_Type()"
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
  "status": "passed"
});
formatter.step({
  "name": "Verify the created season, Brand, Department, Collection and Style which was created.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.verify_the_created_season_Brand_Department_Collection_and_Style_which_was_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout from the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.logout_from_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});