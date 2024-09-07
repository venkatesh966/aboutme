pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build React App
                    dir('/') {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy Node.js App
                    dir('/') {
                        sh 'npm install'
                        // Restart the Node.js server
                        sh 'node app'
                    }
                }
            }
        }
    }

    post {
        always {
            // Actions that run after the build, regardless of success or failure
            echo 'Cleaning up...'
        }
    }
}