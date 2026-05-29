pipeline {
    agent any

    stages {

        stage('Git Checkout') {
            steps {
                echo 'Fetching source code...'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '/usr/local/bin/docker build -t frontend-app .'
            }
        }

        stage('Verify Kubernetes') {
            steps {
                sh 'kubectl get pods'
            }
        }

        stage('Success') {
            steps {
                echo 'Pipeline Executed Successfully'
            }
        }

    }
}
