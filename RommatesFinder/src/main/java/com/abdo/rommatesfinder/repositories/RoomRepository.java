package com.abdo.rommatesfinder.repositories;

import com.abdo.rommatesfinder.models.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends MongoRepository<Room,String> {

}
