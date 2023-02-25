package com.abdo.rommatesfinder.models;

public class RoomDistance {
    private Room room;
    private int distance;

    public RoomDistance(Room room, int distance) {
        this.room = room;
        this.distance = distance;
    }

    public Room getRoom() {
        return room;
    }

    public int getDistance() {
        return distance;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }
}
