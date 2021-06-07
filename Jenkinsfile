pipeline {
    agent any
    stages  {
        stage('build'){
            steps {
                sh 'yarn install'
            }
        }

        stage('test'){
            steps {
                sh 'yarn test'
            }
        }

        stage('run'){
            steps {
                sh 'forever -w start server.js'
            }
        }

    }
}