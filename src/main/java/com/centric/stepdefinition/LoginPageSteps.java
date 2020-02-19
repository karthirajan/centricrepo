package com.centric.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.centric.objectrepository.HomePage;
import com.centric.objectrepository.LoginPage;
import com.centric.objectrepository.StylePage;
import com.centric.resources.Commonactions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSteps extends Commonactions {
	
	Commonactions ca=new Commonactions();
	public static LoginPage lp;
	public static HomePage hp;
	StylePage sp=new StylePage();

	
	@Given("User launches centric application")
	public void user_launches_centric_application() throws InterruptedException {
        lp=new LoginPage();
		ca.insertText(lp.getUsername(), "automation");
		System.out.println("username entered successfully");
		ca.insertText(lp.getPassword(), "kripya");
		ca.click(lp.getLogin());
		
	      
	}

	@Given("verify user screen")
	public void verify_user_screen() throws Throwable {
	    lp.verifyHomePage();  
	    //===========to change language========================\\
	 //   ca.click(driver.findElement(By.xpath("//div[@class='csiViewToolbar']/div/span[contains(@title,'C8')]")));
	 //   ca.click(driver.findElement(By.xpath("(//td[@class='csiHeadingColumn']//td[contains(@data-csi-heading,'')])[9]")));
	 //   Thread.sleep(2000);
	 //   driver.findElement(By.xpath("(//td[@class='csiHeadingColumn']//td[contains(@data-csi-heading,'')])[9]")).clear();
	 //   driver.findElement(By.xpath("(//td[@class='csiHeadingColumn']//td[contains(@data-csi-heading,'')])[9]")).sendKeys("English - USA",Keys.TAB);
	 //   ca.launch("http://kripyaqa.centricsoftware.com/WebAccess/home.html#URL=C457&RURL=&Tab=User%20Profile");
	 //   ca.click(driver.findElement(By.xpath("//a[text()='Centric 8']")));
	      
	}
	
	

	@Then("Verify the created season, Brand, Department, Collection and Style which was created.")
	public void verify_the_created_season_Brand_Department_Collection_and_Style_which_was_created() {
	      
	      
	}

	@Then("Logout from the Application")
	public void logout_from_the_Application() throws InterruptedException {
		Commonactions.jsWaitForPageLoad(); 
		driver.findElement(By.xpath("//span[contains(@data-csi-automation,'PageUser')]")).isDisplayed();
				Thread.sleep(2000);
	    driver.findElement(By.xpath("//span[contains(@data-csi-automation,'PageUser')]")).click();
	    for (int i = 0; i < 250; i++) {
	           WebElement dr = driver.findElement(By.xpath("(//td[@class='csiHeadingColumn']//td[contains(@data-csi-heading,'')])[9]"));
	                      dr.click();
	                Actions a = new Actions(driver);
	              for (int j = 0; j <= i; j++) {
	             a.sendKeys(Keys.DOWN).build().perform();
	                         }

	                a.sendKeys(Keys.TAB).build().perform();
	            if (dr.getText().equalsIgnoreCase("English - UK")) {
	                    break;
	                      }
	                  Thread.sleep(500);
	                     }
	               System.out.println("English - UK" + "Language selected");
	                   Thread.sleep(500);
	                 driver.findElement(By.xpath("//span[contains(text(),'Defaults')]")).click();
	               Thread.sleep(500);
	              driver.findElement(By.xpath("//span[contains(text(),'User Profile')]")).click();
	             Thread.sleep(500);
	                   driver.navigate().refresh();
	     // driver.close();
	}

}
