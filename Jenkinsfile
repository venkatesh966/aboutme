pipeline {
    agent any

    environment {
        // Ensures the PATH includes the location of npm and Node.js installed by Homebrew
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
                script {
                    // Remove react-reveal from package.json using sed
                    sh '''
                    # Remove "react-reveal" from dependencies
                    sed -i '' '/"react-reveal":/d' package.json
                    
                    # Install dependencies except react-reveal
                    npm install
                    '''
                    
                    // Re-add react-reveal to package.json and install it
                    sh 'npm install react-reveal --legacy-peer-deps'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('/Users/venkateshmorpoju/Downloads/venkatesh/aboutme') { // Change this to your desired path
                    script {
                        // Build the React application
                        sh 'npm run build'
                        sh 'ls -l build' // Verify if the build directory is created
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('/Users/venkateshmorpoju/Downloads/venkatesh/aboutme') { // Change this to your desired path
                    script {
                        sh '''
                        # Stop any running server instances
                        if pgrep -f "node app.js" > /dev/null; then
                            echo "Stopping the Node.js server..."
                            pkill -f "node app.js"
                        fi

                        # Start the Node.js server in the background
                        echo "Starting the Node.js server..."
                        nohup node app.js > server.log 2>&1 &

                        # Wait a bit longer to ensure the server starts
                        sleep 30

                        # Output server logs for debugging
                        echo "Server logs:"
                        tail -n 20 server.log
                        '''
                    }
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    sh '''
                    # Wait for the server to be fully operational
                    sleep 10

                    # Verify if the server is responding
                    if curl -sSf http://localhost:4300 > /dev/null; then
                        echo "Server is up and running."
                    else
                        echo "Server is not responding. Check server.log for details."
                        exit 1
                    fi
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Optionally, stop the server if you want to ensure it is stopped after the build
            sh '''
            if pgrep -f "node app.js" > /dev/null; then
                echo "Stopping the Node.js server..."
            fi
            '''
        }
    }
}
