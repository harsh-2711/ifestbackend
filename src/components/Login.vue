<template>
  <div class="login">
    <img src="../assets/logo.png" width="200">
    <h3>Sign In</h3>
    <input v-model="email" type="text" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="6 Digit Password Sent to you"><br>
    <button v-on:click="signIn" :disabled="loading">Sign In</button>
    <p class="errorMessage">{{ error }}</p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import Cookies from 'js-cookie'
  export default {
    name: 'Login',
    data: function () {
      return {
        email: '',
        password: '',
        error: '',
        loading: false,
        set: false
      }
    },
    methods: {
      signIn: function () {

        var ref = firebase.database().ref().child('/Participants');
        ref.once('value', (snapshot) => {
          this.loading = true;
          snapshot.forEach((childSnapshot) => {
            var childData = childSnapshot.val();
            if (childData.Email === this.email && childData.Password === this.password) {
              this.set = true;
              Cookies.set('email', this.email, { expires: 7 });
              this.$router.replace('hello');
            }
          });
        }).then(() => {
          if (this.set === false) {
            this.error = 'Email or Password is Wrong';
          }
          this.loading = false;
        });
      }
    }
  }
</script>

<style scoped>
  .login {
    margin-top: 40px;
  }

  .errorMessage {
    color: red;
  }

  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button {
    margin-top: 20px;
    padding: 3px;
    width: 10%;
    cursor: pointer;
  }

  p {
    margin-top: 40px;
    font-size: 13px;
  }

  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
