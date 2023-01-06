package com.ynov.chat.repository;

import com.ynov.chat.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface  ChatRepository extends CrudRepository<Message, Long> {
}
