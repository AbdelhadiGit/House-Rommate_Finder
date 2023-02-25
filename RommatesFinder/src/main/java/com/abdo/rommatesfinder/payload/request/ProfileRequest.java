package com.abdo.rommatesfinder.payload.request;

import lombok.Data;

@Data

public class ProfileRequest {
    String username;
    String email;
    String password;
}
