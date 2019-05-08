import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  // na 2h05m23s
  render() {
    // ovo dole je "alijas", sad su featuredRooms -> rooms
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);

    return <div>hey feature rooms</div>;
  }
}
