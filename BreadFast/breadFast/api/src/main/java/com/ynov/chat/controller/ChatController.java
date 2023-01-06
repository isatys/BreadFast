package com.ynov.chat.controller;

import com.ynov.chat.model.Message;
import com.ynov.chat.model.User;
import com.ynov.chat.repository.UserRepository;
import com.ynov.chat.service.ChatService;
import com.ynov.chat.service.UserService;
import com.ynov.chat.utils.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



// access doc swagger http://localhost:9000/swagger-ui.html#/user-controller
@RestController
public class ChatController {

    @Autowired
    private ChatService chatService;
    private final UserRepository userRepository;
    private final UserService userService;

    public ChatController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/messages")
    public Message createMessage(@RequestBody Message message,final Long id) {
        Optional<User> user = userService.getUser(id);
        if(user.isPresent()) {
            return chatService.saveMessage(message);
        } else {
            throw new UserNotFoundException("User with ID " + user.get() + " not found");
        }
    }

    @GetMapping("/messages/{id}")
    public Message getMessage(@PathVariable("id") final Long id) {
        Optional<Message> user = chatService.getMessage(id);
        if(user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @GetMapping("/messages")
    public Iterable<Message> getMessages() {
        return chatService.getMessages();
    }

    @PutMapping("/messages/{id}")
    public Message updateMessage(@PathVariable("id") final Long id, @RequestBody Message user) {
        Optional<Message> e = chatService.getMessage(id);
        if(e.isPresent()) {
            Message currentMessage = e.get();


            chatService.saveMessage(currentMessage);
            return currentMessage;
        } else {
            return null;
        }
    }


    @DeleteMapping("/Messages/{id}")
    public void deleteMessage(@PathVariable("id") final Long id) {
        chatService.deleteMessage(id);
    }


}

