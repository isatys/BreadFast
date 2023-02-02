package com.ynov.chat.repository;

import com.ynov.chat.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
