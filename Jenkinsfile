pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:${PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Prepare Dependencies') {
            steps {
                dir('aboutme') {
                    script {
                        // Remove react-reveal from dependencies
                        sh 'sed -i "" "/\"react-reveal\":/d" package.json'
                        
                        // List contents before installing dependencies
                        sh 'ls -l'

                        // Install dependencies
                        sh 'npm install'
                        
                        // Reinstall react-reveal with legacy peer deps
                        sh 'npm install react-reveal --legacy-peer-deps'
                        
                        // List contents after installing dependencies
                        sh 'ls -l'
                    }
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('aboutme') {
                    script {
                        // List contents before build
                        sh 'ls -l'

                        // Build the React application
                        sh 'npm run build'
                        
                        // List contents after build
                        sh 'ls -l'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('aboutme') {
                    script {
                        // Ensure that the build folder exists before deploying
                        if (fileExists('build')) {
                            // Check if the Node.js server is running and stop it if necessary
                            if (sh(script: 'pgrep -f "node app.js"', returnStatus: true) == 0) {
                                echo 'Stopping the Node.js server...'
                                sh 'pkill -f "node app.js"'
                            }

                            // Start the Node.js server and redirect output to a log file
                            echo 'Starting the Node.js server...'
                            sh 'nohup node app.js > server.log 2>&1 &'
                            sh 'tail -f server.log'
                        } else {
                            error 'Build folder does not exist. Deployment aborted.'
                        }
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
