package com.abdo.rommatesfinder.controllers;


import com.abdo.rommatesfinder.models.Room;
import com.abdo.rommatesfinder.services.RoomRecommandationML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RecommandationController {
    @Autowired
    private RoomRecommandationML roomRecommandationService;

    @GetMapping("/recommend")
    public List<Room> recommendHouses(@RequestParam("bedrooms") int numBedrooms, @RequestParam("bathrooms") int numBathrooms, @RequestParam("squareFootage") int squareFootage, @RequestParam("adresse") String adresse, @RequestParam("prix") int prix) {
        return roomRecommandationService.getSimilarRooms(numBedrooms, numBathrooms, squareFootage, adresse, prix);
    }
}