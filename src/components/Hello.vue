<template>
  <div class="hello">
    <ul>
      <li><b>Name</b> : {{user.Name}}</li>
      <li class="logout" v-on:click="logout">Logout</li>
    </ul>
    <div class="event">
      <h1>Events</h1>
      <table>
        <tr>
          <th>Events</th>
          <th class="center">Register</th>
        </tr>
        <tr>
          <td>i.Biz</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Biz') == -1" v-on:click="register('i.Biz')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Biz') != -1" v-on:click="deregister('i.Biz')">Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Relay</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Relay') == -1" v-on:click="register('i.Relay')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Relay') != -1" v-on:click="deregister('i.Relay')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>Blind-C</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('Blind-C') == -1" v-on:click="register('Blind-C')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('Blind-C') != -1" v-on:click="deregister('Blind-C')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.App</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.App') == -1" v-on:click="register('i.App')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.App') != -1" v-on:click="deregister('i.App')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Clash</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Clash') == -1" v-on:click="register('i.Clash')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Clash') != -1" v-on:click="deregister('i.Clash')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Database</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Database') == -1" v-on:click="register('i.Database')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Database') != -1" v-on:click="deregister('i.Database')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Maze</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Maze') == -1" v-on:click="register('i.Maze')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Maze') != -1" v-on:click="deregister('i.Maze')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Cube</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Cube') == -1" v-on:click="register('i.Cube')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Cube') != -1" v-on:click="deregister('i.Cube')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Decipher</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Decipher') == -1" v-on:click="register('i.Decipher')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Decipher') != -1" v-on:click="deregister('i.Decipher')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Ganith</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Ganith') == -1" v-on:click="register('i.Ganith')">Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Ganith') != -1" v-on:click="deregister('i.Ganith')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>Treasure Hunt</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('Treasure Hunt') == -1" v-on:click="register('Treasure Hunt')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('Treasure Hunt') != -1"
              v-on:click="deregister('Treasure Hunt')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Rubble</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Rubble') == -1" v-on:click="register('i.Rubble')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Rubble') != -1"
              v-on:click="deregister('i.Rubble')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Electro</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Electro') == -1" v-on:click="register('i.Electro')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Electro') != -1"
              v-on:click="deregister('i.Electro')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Quiz</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Quiz') == -1" v-on:click="register('i.Quiz')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Quiz') != -1"
              v-on:click="deregister('i.Quiz')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Capture</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Capture') == -1" v-on:click="register('i.Capture')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Capture') != -1"
              v-on:click="deregister('i.Capture')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Bot</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Bot') == -1" v-on:click="register('i.Bot')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Bot') != -1"
              v-on:click="deregister('i.Bot')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Design</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Design') == -1"
              v-on:click="register('i.Design')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Design') != -1"
              v-on:click="deregister('i.Design')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Web</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Web') == -1" v-on:click="register('i.Web')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Web') != -1"
              v-on:click="deregister('i.Web')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Crypt</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Crypt') == -1" v-on:click="register('i.Crypt')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Crypt') != -1"
              v-on:click="deregister('i.Crypt')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.Ride</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.Ride') == -1"
              v-on:click="register('i.Ride')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.Ride') != -1"
              v-on:click="deregister('i.Ride')">
              Deregister
            </button>
          </td>
        </tr>
        <tr>
          <td>i.OHunt</td>
          <td class="center">
            <button class="register" v-if="event.indexOf('i.OHunt') == -1"
              v-on:click="register('i.OHunt')">
              Register
            </button>
            <button class="deregister" v-if="event.indexOf('i.OHunt') != -1"
              v-on:click="deregister('i.OHunt')">
              Deregister
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
  import firebase from 'firebase'
  import Cookies from 'js-cookie'

  export default {
    beforeCreate() {
      console.log('Hello');
      if (!Cookies.get('email')) {
        this.$router.replace('login');
      }
      else {
        var ref = firebase.database().ref().child('Participants');
        ref.once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            var childData = childSnapshot.val();
            var childKey = childSnapshot.key;
            if (childData.Email === Cookies.get('email')) {
              this.user = childData;
              this.key = childKey;
              this.event = childData.Events.Events;
            }
          });
        });
      }
    },
    name: 'hello',
    data () {
      return {
        user: '',
        key: '',
        event: []

      }
    },
    methods: {
      logout: function () {
        Cookies.remove('email');
        this.$router.replace('login');
      },
      register: function (value) {
        this.event.push(value);
        var dataRef = firebase.database().ref().child('Participants/' + this.key + '/Events');
        dataRef.set({
          Events: this.event
        });
      },
      deregister: function (value) {
        var index = this.event.indexOf(value);
        if (index > -1) {
          this.event.splice(index, 1);
        }
        var dataRef = firebase.database().ref().child('Participants/' + this.key + '/Events');
        dataRef.set({
          Events: this.event
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center {
    text-align: center;
  }

  button.register {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
  }

  button.deregister {
    background-color: #ff0000;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border: none;
  }

  .event {
    padding-right: 50px;
    padding-left: 50px;
  }

  table, td, th {
    border: 1px solid #ddd;
    text-align: left;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 50px;
  }

  th, td {
    padding: 15px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #1abc9c !important;
    background-color: #f5f5f5;
    box-shadow: 2px 2px 2px #e8e8e8;
  }

  li {
    float: left;
    padding: 10px;
    font-size: 20px;
    color: #696969;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .logout:hover:not(.active) {
    color: #1abc9c !important;
    cursor: pointer;
  }

  .logout {
    float: right;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
