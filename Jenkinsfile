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
                sh 'echo "hola mundo"'
            }
        }

        stage('run'){
            steps {
                sh 'node server.js'
            }
        }

    }
}