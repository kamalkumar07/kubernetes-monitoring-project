pipeline {
    agent any
environment {
    PATH = "/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
}

    stages {

        stage('Verify Docker') {
            steps {
                sh '/usr/local/bin/docker --version'
            }
        }

        stage('Verify Kubernetes') {
    steps {
        sh '''
        export PATH=$PATH:/opt/homebrew/bin
        /opt/homebrew/bin/aws sts get-caller-identity
        /opt/homebrew/bin/kubectl get nodes
        '''
    }
}

        stage('Verify Deployment') {
            steps {
               sh '''

        export PATH=$PATH:/opt/homebrew/bin
 /opt/homebrew/bin/kubectl get pods -n monitoring-project
 '''

            }
        }

        stage('Success') {
            steps {
                echo 'Jenkins connected to EKS successfully!'
            }
        }
    }
}
