package com.centric.stepdefinition;


import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;

import testcase.BeforeSuite;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.markuputils.ExtentColor;
import com.aventstack.extentreports.markuputils.MarkupHelper;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.ChartLocation;
import com.aventstack.extentreports.reporter.configuration.Theme;
import com.centric.objectrepository.HomePage;
import com.centric.objectrepository.LoginPage;
import com.centric.objectrepository.StylePage;
import com.centric.resources.Commonactions;

import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSteps extends Commonactions {

	private static final String ITestResult = null;
	Commonactions ca = new Commonactions();
	public static LoginPage lp;
	public static HomePage hp;
	StylePage sp = new StylePage();

	ExtentReports extent;
	ExtentTest logger;

	@Before
	public void reportpreparation() {
		//Define extent report files and environment details
		extent = new ExtentReports(System.getProperty("user.dir")
				+ "/Extent_Report/ExtentReport.html", true);
		// extent.addSystemInfo("Environment","Environment Name")
		extent.addSystemInfo("Host Name", "Demo")
				.addSystemInfo("Environment",
						"Testing")
				.addSystemInfo("User Name", "Karthick");
		extent.loadConfig(new File(System.getProperty("user.dir")
				+ "\\extent-config.xml"));
	}

	@Given("User launches centric application")
	public void user_launches_centric_application() throws InterruptedException {
		logger = extent.startTest("Login Application","User launches centric application");
		lp = new LoginPage();
		ca.insertText(lp.getUsername(), "automation");
		System.out.println("username entered successfully");
		ca.insertText(lp.getPassword(), "kripya");
		ca.click(lp.getLogin());

	}

	@Given("verify user screen")
	public void verify_user_screen() throws Throwable {
		lp.verifyHomePage();
		// ===========to change language========================\\
		// ca.click(driver.findElement(By.xpath("//div[@class='csiViewToolbar']/div/span[contains(@title,'C8')]")));
		// ca.click(driver.findElement(By.xpath("(//td[@class='csiHeadingColumn']//td[contains(@data-csi-heading,'')])[9]")));
		// Thread.sleep(2000);
		// driver.findElement(By.xpath("(//td[@class='csiHeadingColumn']//td[contains(@data-csi-heading,'')])[9]")).clear();
		// driver.findElement(By.xpath("(//td[@class='csiHeadingColumn']//td[contains(@data-csi-heading,'')])[9]")).sendKeys("English - USA",Keys.TAB);
		// ca.launch("http://kripyaqa.centricsoftware.com/WebAccess/home.html#URL=C457&RURL=&Tab=User%20Profile");
		// ca.click(driver.findElement(By.xpath("//a[text()='Centric 8']")));

	}

	@Then("Verify the created season, Brand, Department, Collection and Style which was created.")
	public void verify_the_created_season_Brand_Department_Collection_and_Style_which_was_created() {

	}

	@Then("Logout from the Application")
	public void logout_from_the_Application() throws InterruptedException {
		
		// driver.close();
		//update test information to your report
				extent.flush();
				//Clear all extent report resources
				extent.close();
	}

	@AfterClass
	public void getResult(org.testng.ITestResult result) {
		if (result.getStatus() == org.testng.ITestResult.FAILURE) {
			test.log(Status.FAIL, MarkupHelper.createLabel(result.getName()
					+ " FAILED ", ExtentColor.RED));
			test.fail(result.getThrowable());
		} else if (result.getStatus() == org.testng.ITestResult.SUCCESS) {
			test.log(Status.PASS, MarkupHelper.createLabel(result.getName()
					+ " PASSED ", ExtentColor.GREEN));
		} else {
			test.log(Status.SKIP, MarkupHelper.createLabel(result.getName()
					+ " SKIPPED ", ExtentColor.ORANGE));
			test.skip(result.getThrowable());
		}
	}

	@AfterTest
	public void tearDown() {
		// to write or update test information to reporter
		extent.flush();
	}
}
