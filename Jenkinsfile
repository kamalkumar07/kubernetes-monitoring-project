pipeline {
    agent any

    stages {

        stage('Git Checkout') {
            steps {
                echo 'Fetching source code...'
            }
        }

        stage('Verify Docker') {
            steps {
                sh '/usr/local/bin/docker --version'
            }
        }

        stage('Verify Kubernetes') {
            steps {
                sh 'kubectl version --client'
            }
        }

        stage('Success') {
            steps {
                echo 'CI/CD Pipeline Executed Successfully'
            }
        }
    }
}
