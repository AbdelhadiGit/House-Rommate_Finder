package com.abdo.rommatesfinder.controllers;



import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestParam;
        import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class SimilarUsersController {


    private static Map<String, List<String>> users = new HashMap<>();
    static {
        users.put("User1", List.of("Cooking", "Hiking", "Traveling"));
        users.put("User2", List.of("Reading", "Writing", "Painting"));
        users.put("User3", List.of("Hiking", "Traveling", "Photography"));
        users.put("User4", List.of("Cooking", "Baking", "Traveling"));
        users.put("User5", List.of("Yoga", "Meditation", "Traveling"));
        users.put("User6",List.of("football", "baby-foot", "billard"));

    }

    //
    @GetMapping("/similar-users")
    public List<String> getSimilarUsers(@RequestParam(value = "user") String userName,
                                        @RequestParam(value = "k") int k) {


        List<String> inputUserInterests = users.get(userName);


        List<UserDistance> userDistances = new ArrayList<>();
        for (Map.Entry<String, List<String>> entry : users.entrySet()) {
            String userNameTemp = entry.getKey();
            if (!userNameTemp.equals(userName)) {
                List<String> interests = entry.getValue();
                double distance = calculateDistance(inputUserInterests, interests);
                userDistances.add(new UserDistance(userNameTemp, distance));
            }
        }


        userDistances.sort(Comparator.comparingDouble(u -> u.distance));


        List<String> similarUsers = new ArrayList<>();
        for (int i = 0; i < k && i < userDistances.size(); i++) {
            similarUsers.add(userDistances.get(i).userName);
        }
        return similarUsers;
    }


    private double calculateDistance(List<String> interests1, List<String> interests2) {
        int commonInterests = 0;
        for (String interest : interests1) {
            if (interests2.contains(interest)) {
                commonInterests++;
            }
        }
        return 1.0 / (commonInterests + 1);
    }

    // This class represents a user and their distance from another user
    private static class UserDistance {
        private String userName;
        private double distance;

        public UserDistance(String userName, double distance) {
            this.userName = userName;
            this.distance = distance;
        }
    }
}
