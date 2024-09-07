pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build React App') {
            steps {
                dir('aboutme') {
                    script {
                        // Disable ESLint checks
                        sh 'npm install'
                        sh 'npm run build' // ESLint should not be triggered during the build
                    }
                }
            }
        }

        stage('Install Node.js Dependencies') {
            steps {
                dir('aboutme') {
                    script {
                        // Disable ESLint checks
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('aboutme') {
                    script {
                        sh 'node app.js'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
