# Api-automation-web

##Tutorial for installation this automation test
- Clone or Download ZIP files
- Ekstrak Files (if from ZIP files)
- Open Your Visual Code
- Open Folder ( select this folder )
- Open Terminal and command
``` 
Npm Init
``` 
After this
``` 
Npm install
``` 

## Running script 
``` 
npm run wdio 
```
for running assertion buttons on element
``` 
npm run wdio '@element' 
``` 
for running assertion dropable on interaction
```
npm run wdio '@interaction' 
``` 

## running allure reports
- install allure reports 
```
npm install wdio-allure-reporter --save-dev
``` 
- install allure command
``` 
npm install allure-commandline --save-dev
``` 
## added this code on wdio configuration  
``` 
reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: true,
        disableMochaHooks: true,
        addConsoleLogs: true
    }]],
``` 
## Running Allure results 
``` 
npm run wdio 
```
and
``` 
npm run allure-report
```
for teminate ( ctrl + c and select Y)
