import React, { Component } from 'react';
import RoomList from './../components/RoomList';
import MessageList from './../components/MessageList';

class ActiveRoom extends Component {
  render() {
    return(
      <section className="chat-display">
        <section id="chat-room-list">
          <div>{this.props.rooms}</div>
        </section>
        <section id="selected-room-messages">
          <div>{this.props.activeRoom.name}</div>
        </section>
      </section>
    )
  }
}

export default ActiveRoom;
