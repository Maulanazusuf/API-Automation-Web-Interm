# Api-automation-web

Tutorial for installation this automation test
- Clone or Download ZIP files
- Ekstrak Files (if from ZIP files)
- Open Your Visual Code
- Open Folder ( select this folder )
- Npm Init
- Npm install

Tutorial for Runnning this syntax
- command use NPM run wdio for running all testing
- command use NPM run wdio '@element' for running assertion buttons on element
- command use NPM run wdio '@interaction' for running assertion dropable on interaction

Tutorial for running allure reports
- install allure reports 
```
npm install wdio-allure-reporter --save-dev
``` 
- install allure command
``` 
npm install allure-commandline --save-dev
``` 
- added this code on wdio configuration  
``` 
reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        useCucumberStepReporter: true,
        disableMochaHooks: true,
        addConsoleLogs: true
    }]],
``` 
- running wdio first (command use NPM run wdio )
- running allure reports (command use NPM run allure-report)
- after this npm run allure-report
- for teminate ( ctrl + c and select Y)
