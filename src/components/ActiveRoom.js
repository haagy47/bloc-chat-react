import React, { Component } from 'react';
import RoomList from './../components/RoomList';
import MessageList from './../components/MessageList';

class ActiveRoom extends Component {

  handleActiveContent(roomMessages) {
    //const activeMessages = messages.filter(message => message.roomID.key === activeRoom.key)
    console.log(roomMessages)
  }

  render() {
    return(
      <section className="chat-display">
        <section id="chat-room-list">
          <div>{this.props.rooms}</div>
        </section>
        <section id="selected-room-messages">
          <div>{this.props.activeRoom.name}</div>
          <div>{this.handleActiveContent(this.props.messages)}</div>
        </section>
      </section>
    )
  }
}

export default ActiveRoom;
