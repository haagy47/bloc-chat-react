import React, { Component } from 'react';
import ActiveRoom from './../components/ActiveRoom';

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
     //console.log(snapshot.val())
     const message = snapshot.val();
     message.key = snapshot.key;
     this.setState({ messages: this.state.messages.concat( message ) });
   });
  }

  handleMessageAddition(e){
    this.setState({ newMessage: e.target.value })
  }

  handleSubmit(message, e, rooms, key) {
    e.preventDefault();
    if (!this.state.newMessage) {return}
    this.roomsRef.push({
      username: 'Emily',
      content: message,
      sentAt: '10pm',
      roomId: this.props.activeRoom,
    })
    const newMessage = { content: this.state.newMessage };
    this.setState({ messages: [...this.state.messages, newMessage], newMessage: '' });
  }

  handleMessages(message) {
    return this.props.activeRoom.key
  }

  render() {
    return (
      <section className="message-list">
        <section className="messages">
          {
            this.state.messages.map( (message, index) =>
              <div key={index}>
                <div className="message-username">{message.username}</div>
                <div className="message-content">{message.content}</div>
              </div>
            )
          }
        </section>
        <form onSubmit={(e) => this.handleSubmit(this.state.newMessage, e)}>
          <input type="text" value={this.state.newMessage} onChange={this.handleMessageAddition.bind(this)}/>
          <input type="submit" />
        </form>
        <ActiveRoom
          messages={this.state.messages}
          activeRoom={this.props.activeRoom}
          activeMessages={this.props.activeMessages}
        />
      </section>
    )
  }
}

export default MessageList;
