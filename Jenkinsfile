pipeline {
    agent any
    environment {
                 
        DOCKER_IMAGE_NAME = "hidopi/frontend_project:v1.0"
    
    }
    stages {
        stage('Checkout') {
            steps {            
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {

                    // Run npm goals directly
                    sh 'npm install --force'
                }
                   
                }
            }
        
 
        stage('Build and Push Docker Image') {
            steps {
              

                // Build the Docker image
                sh 'docker build -t $DOCKER_IMAGE_NAME .'

                // Log in to Docker Hub
                withDockerRegistry(credentialsId: 'dockerhub_id', url: '') {
                    // Push the Docker image to Docker Hub
                    sh 'docker push $DOCKER_IMAGE_NAME'
                }
            }
        }
        stage('Generate Checksum') {
            steps {
                script {
                    def checksum = sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
                    writeFile file: 'checksum.txt', text: checksum
                }
            }
        }
//stage de déploiement
        stage('Deploy') {
            steps {
              script {
                withKubeConfig([credentialsId: 'K8S', serverUrl: '']) {
                sh ('kubectl apply -f deployment-file.yml')
                }}
            
            }
        }
    }

    post {
        always {
            deleteDir() // Delete workspace to clean up
        }
        success {
            emailext subject: 'Build Success',
                     body: 'The build was successful. Congratulations!',
                     to: 'chebbii.asma@gmail.com' // Specify the recipient's email address here
        }
        failure {
            emailext subject: 'Build Failure',
                     body: 'The build failed. Please check the logs for details.',
                     to: 'chebbii.asma@gmail.com' // Specify the recipient's email address here
        }
    }
}