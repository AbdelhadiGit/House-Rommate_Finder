package com.abdo.rommatesfinder.services;


import com.abdo.rommatesfinder.models.Room;
import com.abdo.rommatesfinder.models.RoomDistance;
import com.abdo.rommatesfinder.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Comparator;

@Service
public class RoomRecommandationML {
    @Autowired
    private RoomRepository roomRepository;

    private int k = 5;

    public List<Room> getSimilarRooms(int numBedrooms, int numBathrooms, int squareFootage, String adresse, int prix) {
        List<Room> rooms = roomRepository.findAll();
        List<RoomDistance> distances = new ArrayList<>();


        for (Room room : rooms) {
            int distance = calculateDistance(numBedrooms, numBathrooms, squareFootage, adresse, prix, room);
            distances.add(new RoomDistance(room, distance));
        }


        distances.sort(Comparator.comparingInt(RoomDistance::getDistance));


        List<Room> kNearestNeighbors = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            kNearestNeighbors.add(distances.get(i).getRoom());
        }

        return kNearestNeighbors;
    }

    private int calculateDistance(int numBedrooms, int numBathrooms, int squareFootage, String adresse, int prix, Room room) {
        int bedroomDistance = Math.abs(numBedrooms - room.getNumBedrooms());
        int bathroomDistance = Math.abs(numBathrooms - room.getNumBathrooms());
        int squareFootageDistance = Math.abs(squareFootage - room.getSquareFootage());
        int locationDistance = adresse.equals(room.getAdresse()) ? 0 : 1;
        int priceDistance = Math.abs(prix - room.getPrix());

        return bedroomDistance + bathroomDistance + squareFootageDistance + locationDistance + priceDistance;
    }
}

