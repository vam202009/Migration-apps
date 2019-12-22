package Trunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\vam20\\eclipse-workspace\\TD_ClaimsTest\\src\\main\\java\\Feature\\login.feature",
glue = {"StepDefinition"},
plugin= {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.json"},
dryRun=false)

public class TestRunner {

}
