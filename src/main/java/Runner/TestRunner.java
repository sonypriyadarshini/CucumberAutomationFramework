package Runner;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        //path of feature file
        features = "/Users/sony.priyadarshini/Documents/Sony_Personal_Code/CucumberAutomationFramework/src/main/java/feature/login.feature",
        //path of stepdefinition file
        glue = "stepDefinition",
        //display console output in proper readable format
        monochrome = true,
        //to generate different types of reports like html, json, junit
        format = {"pretty","html:test-output","json:json_output/cucumber.json", "junit:junit_output/cucumber.junit"},
        //strict. checks mapping between feature and stepdefinition. same as dryrun but this executes the testcases
        strict = true,
        //checks mapping between feature and stepdefinition. every step defined in feature should be defined in stepdefinition
        //if made true, it doesn't execute. just checks the mapping
        dryRun = false
)
public class TestRunner {
}
