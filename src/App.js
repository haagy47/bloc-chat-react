import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import ActiveRoom from './components/ActiveRoom';
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
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
      activeMessages: ''
    }
  }

  handleRoomClick(room) {
    this.setState({ activeRoom: room })
    this.handleActiveMessages()
  }

  handleActiveMessages() {
    //console.log(messages.key)
  }

  render() {
    return (
      <div className="App">
        <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          handleRoomClick={this.handleRoomClick.bind(this)}
        />
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          handleActiveMessages={this.handleActiveMessages.bind(this)}
        />
        <ActiveRoom
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          activeMessages={this.state.activeMessages}
        />
      </div>
    );
  }
}

export default App;
