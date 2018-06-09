import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }

    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const message = snapshot.val();
     message.key = snapshot.key;
     this.setState({ messages: this.state.messages.concat( message ) });
   });
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default MessageList;
