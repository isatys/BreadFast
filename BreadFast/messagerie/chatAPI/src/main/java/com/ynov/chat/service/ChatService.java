package com.ynov.chat.service;

import com.ynov.chat.model.Message;
import com.ynov.chat.model.User;
import com.ynov.chat.repository.ChatRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    public Optional<Message> getMessage(final Long id) {
        return chatRepository.findById(id);
    }

    public Iterable<Message> getMessages() {
        return chatRepository.findAll();
    }

    public void deleteMessage(final Long id) {
        chatRepository.deleteById(id);
    }

    public Message saveMessage(Message message) {
        Message savedMessage= chatRepository.save(message);
        return savedMessage;
    }

}
