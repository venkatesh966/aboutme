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
        dir('/Users/venkateshmorpoju/Downloads/venkatesh/aboutme') {
            script {
                sh '''
                # Stop any running server instances
                if pgrep -f "node app.js" > /dev/null; then
                    echo "Stopping the Node.js server..."
                    pkill -f "node app.js"
                fi

                # Start the Node.js server in the foreground for debugging
                echo "Starting the Node.js server..."
                node app.js
                '''
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
