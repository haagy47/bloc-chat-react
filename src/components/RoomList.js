import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }

    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
     console.log(snapshot.val())
     room.key = snapshot.key;
     this.setState({ rooms: this.state.rooms.concat( room ) });
     console.log(this.state.rooms)
   });
  }

  render() {
    return (
      <div className="room-list">
      {
        this.state.rooms.map( () =>
          <div>{this.state.rooms}</div>
        )
      }
      </div>
    )
  }
}

export default RoomList;
