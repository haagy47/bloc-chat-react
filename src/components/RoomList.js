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
     room.key = snapshot.key;
     this.setState({ rooms: this.state.rooms.concat( room ) });
   });
  }

  handleRoomAddition(e){
    this.setState({ newRoom: e.target.value })
  }

  handleSubmit() {
    this.roomsRef.push({
      name: this.state.newRoom
    })
  }

  render() {
    return (
      <section className="room-list">
        <section className="rooms">
          {
            this.state.rooms.map( (room, index) =>
              <div key={index}>{room.name}</div>
            )
          }
        </section>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={this.state.newRoom} onChange={ (e) => this.handleRoomAddition(e) }/>
          <input type="submit" />
        </form>
      </section>
    )
  }
}

export default RoomList;
