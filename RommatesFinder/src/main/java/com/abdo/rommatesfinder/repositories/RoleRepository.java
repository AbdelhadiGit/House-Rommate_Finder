package com.abdo.rommatesfinder.repositories;

import java.util.Optional;

import com.abdo.rommatesfinder.models.ERole;

import com.abdo.rommatesfinder.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends MongoRepository<Role, Long> {
    Optional<Role> findByName(ERole name);


}