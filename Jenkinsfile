pipeline {
    agent any

    stages {

        stage('Verify Docker') {
            steps {
                sh '/usr/local/bin/docker --version'
            }
        }

        stage('Verify Kubernetes') {
            steps {
                sh '/opt/homebrew/bin/kubectl get nodes'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '/opt/homebrew/bin/kubectl get pods -n monitoring-project'
            }
        }

        stage('Success') {
            steps {
                echo 'Jenkins connected to EKS successfully!'
            }
        }
    }
}
