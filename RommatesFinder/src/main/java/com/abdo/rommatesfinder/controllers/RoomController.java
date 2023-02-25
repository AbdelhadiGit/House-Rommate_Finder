package com.abdo.rommatesfinder.controllers;

import com.abdo.rommatesfinder.models.Room;
import com.abdo.rommatesfinder.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/rooms")
public class RoomController {
    @Autowired
    RoomService roomService;
    @GetMapping("/allRooms")
    public ResponseEntity<List<Room>>  getAllRooms(){
        List<Room> rooms=  roomService.getRooms();
        return new ResponseEntity<List<Room>>(rooms, HttpStatus.OK);
    }
    @GetMapping("/Room/{id}")
    public ResponseEntity<Room>  getRoom(@PathVariable("id") String id){
        Room room=  roomService.getRoom(id).get();
        return new ResponseEntity<Room>(room, HttpStatus.OK);
    }
    @PostMapping ("/addRoom")
    public ResponseEntity<Room>  addRoom(@RequestBody Room room){
        return new ResponseEntity<Room>(roomService.addRoom(room), HttpStatus.OK);
    }
}
