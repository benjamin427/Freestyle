pipeline {
    agent any 

    tools {nodejs "nodejs 22"}

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i' 
            }
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run cypress:run'
            }
        }
    }
}