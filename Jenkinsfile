stages {

    stage('Git Checkout') {
        steps {
            echo 'Fetching source code...'
        }
    }

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t frontend-app .'
        }
    }

    stage('Verify Kubernetes') {
        steps {
            sh 'kubectl get pods'
        }
    }

}
