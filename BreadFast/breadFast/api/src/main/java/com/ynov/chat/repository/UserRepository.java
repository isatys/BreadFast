package com.ynov.chat.repository;

import com.ynov.chat.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
