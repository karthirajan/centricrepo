Feature:  Create New season in qakripya.com

@Scenario1
  Scenario: User creates New season for a product
  Given User launches centric application
  And User selects language
  Then Go to homepage
  And verify user screen
  And Click style tab and get the listed season name in the style tab
  When User create New season with mandatory deatails for season creation
  Then Click New Brand
  And Create Brand by providing valid and mandatory data
  Then Save the New Brand which was created
  Then Click New department by providing valid data 
  Then Save the New department which was created
  Then Click New collection
  And Create collection by providing valida and mandatory details
  Then Save the collection which was created
  Then Click New style
  And Create Style followed by its style Type
  Then Go to homepage
  Then select the image from the avilable resource
  Then Verify the created season, Brand, Department, Collection and Style which was created.
  Then Logout from the Application
  