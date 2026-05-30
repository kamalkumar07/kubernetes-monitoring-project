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
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin

                    docker push $IMAGE_NAME:$IMAGE_TAG
                    '''
                }
            }
        }

        stage('Deploy To EKS') {
            steps {
                sh '''
                kubectl set image deployment/frontend-deployment \
                frontend-app=$IMAGE_NAME:$IMAGE_TAG \
                -n monitoring-project

                kubectl rollout status deployment/frontend-deployment \
                -n monitoring-project
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
    }
}
