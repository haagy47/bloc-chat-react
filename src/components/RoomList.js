import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoom: ''
    }

    this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  componentDidMount() {
   this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
    // console.log(room)
     room.key = snapshot.key;
    // console.log(room.key)
     this.setState({ rooms: this.state.rooms.concat( room ) });
   });
  }

  handleRoomAddition(e){
    this.setState({ newRoom: e.target.value })
  }

  handleSubmit(room, e) {
    e.preventDefault();
    if (!this.state.newRoom) {return}
    console.log(this.roomsRef.rooms.key)
    const newRoom = {
      name: room,
      key: room
    };
    this.roomsRef.push(newRoom)
    this.setState({ rooms: [...this.state.rooms, newRoom], newRoom: '' });
  }

  render() {
    return (
      <section className="room-list">
        <section className="rooms">
          {
            this.state.rooms.map( (room, index) =>
              <div key={index} onClick={() => this.props.handleRoomClick(room)}>{room.name}</div>
            )
          }
        </section>
        <form onSubmit={(e) => this.handleSubmit(this.state.newRoom, e)}>
          <input type="text" value={this.state.newRoom} onChange={this.handleRoomAddition.bind(this)}/>
          <input type="submit" />
        </form>
      </section>
    )
  }
}

export default RoomList;
