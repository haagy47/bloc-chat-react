import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: ''
    }

    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  render() {
    return(
      <section className="message-list">
        <section className="messages">
        </section>
        <form>
          <input type="text"/>
          <input type="submit" />
        </form>
      </section>
    )
  }
}

export default MessageList;
