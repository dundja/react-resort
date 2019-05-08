import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
import Title from "./Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    // na 2h05m23s
    render() {
        // ovo dole je "alijas", sad su featuredRooms -> rooms
        const { loading, featuredRooms: rooms } = this.context;
        let roomsToRender = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });

        return (
            <section className="featured-rooms">
                <Title title="Featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : roomsToRender}
                </div>
            </section>
        );
    }
}
