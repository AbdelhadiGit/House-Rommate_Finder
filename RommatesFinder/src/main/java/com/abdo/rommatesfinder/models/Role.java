package com.abdo.rommatesfinder.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Role {
    @Id
    private String id;
    private ERole name;


}