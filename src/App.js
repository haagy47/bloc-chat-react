import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA19Q4b9SplkYVrj4UrA4xDUKfEsJKhUfk",
    authDomain: "bloc-chat-react-8116b.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-8116b.firebaseio.com",
    projectId: "bloc-chat-react-8116b",
    storageBucket: "bloc-chat-react-8116b.appspot.com",
    messagingSenderId: "689678051686"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList
          firebase={firebase}
        />
      </div>
    );
  }
}

export default App;
