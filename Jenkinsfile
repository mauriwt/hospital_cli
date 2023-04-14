pipeline {
  agent any
  stages {
    stage('Ckeckout code / git') {
      steps {
        git(url: 'https://github.com/mauriwt/hospital_cli', branch: 'dev')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit Test') {
          steps {
            sh 'cd hospital_cli && npm i && npm run test:unit'
          }
        }

      }
    }

  }
}