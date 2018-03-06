// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyDuAMYKb1GqMkye1A0kiNCM53wILjxp8_c",
  authDomain: "ifestvolunteer.firebaseapp.com",
  databaseURL: "https://ifestvolunteer.firebaseio.com",
  projectId: "ifestvolunteer",
  storageBucket: "ifestvolunteer.appspot.com",
  messagingSenderId: "290599036751"
};

firebase.initializeApp(config);

let app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
