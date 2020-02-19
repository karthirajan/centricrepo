package com.centric.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\main\\resources\\Features\\NewSeason.feature",
                 glue = "com.centric.stepdefinition",
                 plugin = {"html:target","json:target/reports.json"})

public class TestRunner {

	
	
}
