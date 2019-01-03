package stepDefinition;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class LoginStepDefinition {

    WebDriver driver;

    @Given("^User is already on the login page$")
    public void user_is_already_on_the_login_page(){
        System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"/src/main/resources/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://accounts.google.com/signin/v2/identifier?" +
                "continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin");
    }

    @When("^Page title is Gmail$")
    public void page_title_is_Gmail(){
        System.out.println(driver.getTitle());
        Assert.assertEquals("Gmail",driver.getTitle());
    }

    @Then("^User enters email \"(.*)\" and click Next$")
    public void user_enters_email_id_and_click_Next(String email) throws InterruptedException {
        driver.findElement(By.xpath("//input[@type='email']")).sendKeys(email);
        Thread.sleep(2000);
        driver.findElement(By.xpath("//span[text()='Next']")).click();
        Thread.sleep(3000);
    }
//// using data tables
//    @Then("^User enters email and click Next$")
//    public void user_enters_email_id_and_click_Next(DataTable emailid) throws InterruptedException {
//        List<List<String>> data = emailid.raw();
//        driver.findElement(By.xpath("//input[@type='email']")).sendKeys(data.get(0).get(0));
//        Thread.sleep(2000);
//        driver.findElement(By.xpath("//span[text()='Next']")).click();
//        Thread.sleep(3000);
//    }

    @Then("^User enters password \"(.*)\" and click Next$")
    public void user_enters_password_and_click_Next(String password) throws InterruptedException {
        driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
        driver.findElement(By.xpath("//span[text()='Next']")).click();
        Thread.sleep(5000);
    }

    @Then("^User is gmail inbox page$")
    public void user_is_gmail_inbox_page() {
        Assert.assertTrue(driver.findElement(By.xpath("//a[contains(@aria-label,'(sonypriyatest@gmail.com)')]")).isDisplayed());
    }

}
