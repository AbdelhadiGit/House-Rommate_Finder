package com.abdo.rommatesfinder.services;

import com.abdo.rommatesfinder.models.Room;
import com.abdo.rommatesfinder.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
   @Autowired
    RoomRepository roomRepository;
public List<Room> getRooms(){
    return roomRepository.findAll();
}

public Room addRoom(Room room){
    Room NewRoom=roomRepository.save(room);
    return NewRoom;
}
public Optional<Room> getRoom(String id){
    return roomRepository.findById(id);
}
}
