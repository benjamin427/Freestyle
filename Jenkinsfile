pipeline {
    agent any 

   parameters {
       string('name': SPEC, 'defaultValue': 'cypress/features/**', 'description': 'Enter the script path to execute')
       choice('name': BROWSER, 'choices': ['chrome', 'edge', 'firefox'], 'description': 'Choose the browser to execute')
   }

    stages {
        stage('Building') {
            steps {
                echo 'Building the application' 
            }
        }
        stage('Testing') {
            steps {
                bat 'npm i'
                bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
            }
        }
        stage('Deploying') {
            steps {
                echo 'Deploying the application'
            }
        }
    }

   
    //publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    
}