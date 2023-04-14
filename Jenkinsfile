pipeline {
  agent any
  stages {
    stage('Ckeckout code / git') {
      steps {
        git(url: 'https://github.com/mauriwt/hospital_cli', branch: 'dev')
      }
    }

    stage('') {
      steps {
        sh 'ls -la'
      }
    }

  }
}