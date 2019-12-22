package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class StepDefination {
    WebDriver driver;
	@Given("^user is already on Page$")
	public void user_already_on_Page() {
		System.setProperty("webdriver.chrome.driver", "D://chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.amazon.com");
	}
	
	@When("^title of page is amazon.com$")
	public void title_of_page_is_amazon() {
		String title=driver.getTitle();
		System.out.println(title);
		
	}
	
	  @When("^user enter \"(.*)\" in search field$")
	  public void user_enter_data_in_search_field(String data) throws Throwable {
	      
	      
	      driver.findElement(By.id("twotabsearchtextbox")).sendKeys(data);
	      driver.findElement(By.xpath("//div[@class='nav-search-submit nav-sprite']//input[@class='nav-input']")).click();
	      Thread.sleep(300);
	    
	  }
	  

	  
	@When("^the title of the page is tabs$")
	  public void the_title_of_the_page_is_tabs() {
	      String titletwo=driver.getTitle();
	      System.out.println(titletwo);
	   Assert.assertEquals("Amazon.com: tablets", titletwo);
	     
	  }
	
	  @Then("^close the browser$") 
	  public void close_the_browser() {
		  driver.quit();
	  }
	 

}
