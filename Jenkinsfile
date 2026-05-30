pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"
        IMAGE_NAME = "kamal7b/frontend-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

       stage('Build Docker Image') {
    steps {
        sh '''
        export PATH=/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin

        docker-credential-desktop version || true

        /usr/local/bin/docker buildx build \
        --platform linux/amd64 \
        -t $IMAGE_NAME:$IMAGE_TAG \
        --load .
        '''
    }
}

        stage('Push Docker Image') {
    steps {
        withCredentials([
            usernamePassword(
                credentialsId: 'dockerhub-creds',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS'
            )
        ]) {
            sh '''
            export PATH=/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin

            echo $DOCKER_PASS | /usr/local/bin/docker login -u $DOCKER_USER --password-stdin

            /usr/local/bin/docker push $IMAGE_NAME:$IMAGE_TAG
            '''
        }
    }
}

        stage('Deploy To EKS') {
    steps {
        sh '''
        export PATH=/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin

        /opt/homebrew/bin/kubectl set image deployment/frontend-deployment \
        frontend-app=$IMAGE_NAME:$IMAGE_TAG \
        -n monitoring-project

        /opt/homebrew/bin/kubectl rollout status deployment/frontend-deployment \
        -n monitoring-project
        '''
    }
}

    post {
        success {
            echo 'Deployment Successful!'
        }
    }
}
