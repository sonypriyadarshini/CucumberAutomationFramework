package Runner;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/sony.priyadarshini/Documents/Sony_Personal_Code/CucumberAutomationFramework/src/main/java/feature/login.feature"
        ,glue = "stepDefinition"
        ,format = {"pretty","html:test-output"}
)
public class TestRunner {
}
