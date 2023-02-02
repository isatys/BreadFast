package com.ynov.chat.service;

import com.ynov.chat.model.Order;
import com.ynov.chat.repository.OrderRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Optional<Order> getOrder(final Long id) {
        return orderRepository.findById(id);
    }

    public Iterable<Order> getOrder() {
        return orderRepository.findAll();
    }

    public void deleteOrder(final Long id) {
        orderRepository.deleteById(id);
    }

    public Order saveOrder(Order order) {
        Order savedOrder= orderRepository.save(order);
        return savedOrder;
    }

}