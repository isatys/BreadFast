package com.ynov.chat.controller;


import com.ynov.chat.model.User;
import com.ynov.chat.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



// access doc swagger http://localhost:9000/swagger-ui.html#/user-controller
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") final Long id) {
        Optional<User> user = userService.getUser(id);
        if(user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @GetMapping("/users")
    public Iterable<User> getUsers() {
        return userService.getUsers();
    }

    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable("id") final Long id, @RequestBody User user) {
        Optional<User> e = userService.getUser(id);
        if(e.isPresent()) {
            User currentUser = e.get();


            userService.saveUser(currentUser);
            return currentUser;
        } else {
            return null;
        }
    }


    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") final Long id) {
        userService.deleteUser(id);
    }


}
