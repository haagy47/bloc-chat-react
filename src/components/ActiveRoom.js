import React, { Component } from 'react';
import RoomList from './../components/RoomList';
import MessageList from './../components/MessageList';

class ActiveRoom extends Component {

  handleActiveContent(roomMessages) {
    //console.log(roomMessages)
    //const activeMessages = roomMessages.filter(message => message.index === 1)
    //console.log(activeMessages)
  }

  render() {
    return(
      <section className="chat-display">
        <section id="chat-room-list">
          {
            this.props.messages.map( (message, index, activeRoom) => {
                if (message.roomId.key === activeRoom.key) {
                  <div key={index}>
                    <div className="message-username">{message.username}</div>
                    <div className="message-content">{message.content}</div>
                  </div>
                  }
                }
              )
          }
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
