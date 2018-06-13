import React, { Component } from 'react';

class User extends Component {

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  handleSignIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  handleSignOut() {
    this.props.firebase.auth().signOut();
  }

  render() {
    return(
      <section className="buttons">
        <div>{this.props.user === null ? "Guest" : this.props.user.displayName}</div>
        <button name="sign-in" onClick={this.handleSignIn.bind(this)}>Sign In</button>
        <button name="sign-out" onClick={this.handleSignOut.bind(this)}>Sign Out</button>
      </section>
    )
  }
}

export default User;
