pipeline {
    agent any

    environment {
        // Define any environment variables if necessary
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                checkout scm
            }
        }

        stage('Build React App') {
            steps {
                // Navigate to the React app directory and build the React application
                dir('aboutme') {
                    script {
                        // Install dependencies and build the React app
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Install Node.js Dependencies') {
            steps {
                dir('aboutme') {
                    script {
                        // Install Node.js dependencies
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('aboutme') {
                    script {
                        // Restart the Node.js server or perform other deployment actions
                        sh 'node app'  // Adjust according to your deployment strategy
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Add any cleanup actions if needed
        }
    }
}
