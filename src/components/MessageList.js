import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: ''
    }

    this.roomsRef = this.props.firebase.database().ref('messages');
    this.timeStamp = this.props.firebase.database.ServerValue.TIMESTAMP;

  }

  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const message = snapshot.val();
     message.key = snapshot.key;
     this.setState({ messages: this.state.messages.concat( message ) });
   });
  }

  handleMessageAddition(e){
    this.setState({ newMessage: e.target.value })
  }

  handleSubmit(message, e, user, room) {
    e.preventDefault();
    if (this.props.activeRoom === '') {return};
    const newMessage = {
      username: this.props.user === null ? 'Guest' : this.props.user.displayName,
      content: message,
      sentAt: this.timeStamp,
      roomId: this.props.activeRoom.key,
    };
    if (!this.state.newMessage) {return};
    this.roomsRef.push(newMessage);
    this.setState({ newMessage: '' });
  }

  handleMessages(message) {
    return this.props.activeRoom.key
  }

  render() {
    return (
      <section className="message-list">
        <section className="active-room-name">{this.props.activeRoom === '' ? 'Please select a room' : this.props.activeRoom.name}</section>
        <section className="messages">
          {
            this.state.messages.map( (message, index) => {
              if (message.roomId === this.props.activeRoom.key) {
                return (
                  <div key={index}>
                    <div className="message-username">{message.username}</div>
                    <div className="message-content">{message.content}</div>
                  </div>
                  );
                }
              }
            )
          }
        </section>
        <section className="message-entry">
          <form onSubmit={(e) => this.handleSubmit(this.state.newMessage, e)}>
            <input type="text" value={this.state.newMessage} onChange={this.handleMessageAddition.bind(this)}/>
            <input type="submit" />
          </form>
        </section>
      </section>
    )
  }
}

export default MessageList;
