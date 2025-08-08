@Library("Shared") _
pipeline {
    agent { label "chandan" }

    environment {
        IMAGE_NAME = "node-test"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages { 
        stage("Hello") {
            steps {
                script {
                    hello()
                }
            }
        }

        stage("Code") {
            steps {
                script {
                    clone("https://github.com/ghostmodeison/node-js-testing-code", "main")
                }
            }
        }

        stage("Build") {
            steps {
                echo "This is building the Docker image"
                buildDockerImage(IMAGE_NAME, IMAGE_TAG)
            }
        }

        stage("Push to AWS Elastic-Container-Registry") {
            steps {
                echo "This is pushing the image to ECR (placeholder)"
                echo "Jai Shree Ram!"
            }
        }

        stage("Deploy") {
            steps {
                echo "This is Deploying the code using docker-compose"
                sh """
                    docker-compose down || true
                    docker-compose up -d
                """
            }
        }
    }
}
