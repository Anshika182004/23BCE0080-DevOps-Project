pipeline {
    agent any

    environment {
        IMAGE_NAME = 'abc-technologies-website'
        CONTAINER_NAME = 'abc-website-container'
        KUBECONFIG = 'C:\\Users\\Admin\\.kube\\config'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Maven Build') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Stop Old Docker Container') {
            steps {
                bat 'docker stop %CONTAINER_NAME% || exit 0'
                bat 'docker rm %CONTAINER_NAME% || exit 0'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker run -d --name %CONTAINER_NAME% -p 8090:80 %IMAGE_NAME%'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'docker save %IMAGE_NAME%:latest -o abc-technologies-website.tar'
                bat 'docker exec -i desktop-control-plane ctr -n k8s.io images import - < abc-technologies-website.tar'
                bat 'kubectl rollout restart deployment abc-website-deployment'
                bat 'kubectl rollout status deployment abc-website-deployment'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully.'
        }
        failure {
            echo 'CI/CD pipeline failed.'
        }
    }
}