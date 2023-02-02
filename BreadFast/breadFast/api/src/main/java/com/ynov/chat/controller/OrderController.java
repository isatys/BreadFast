package com.ynov.chat.controller;


import com.ynov.chat.model.Order;
import com.ynov.chat.model.User;
import com.ynov.chat.service.OrderService;
import com.ynov.chat.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



// access doc swagger http://localhost:9000/swagger-ui.html#/user-controller
@RestController
@Api
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/order")
    public Order createOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }

    @GetMapping("/orders/{id}")
    public Order getOrder(@PathVariable("id") final Long id) {
        Optional<Order> order = orderService.getOrder(id);
        if(order.isPresent()) {
            return order.get();
        } else {
            return null;
        }
    }

    @GetMapping("/orders")
    public Iterable<Order> getOrder() {
        return orderService.getOrder();
    }

    @PutMapping("/order/{id}")
    public Order updateOrder(@PathVariable("id") final Long id, @RequestBody Order order) {
        Optional<Order> e = orderService.getOrder(id);
        if(e.isPresent()) {
            Order currentOrder = e.get();


            orderService.saveOrder(currentOrder);
            return currentOrder;
        } else {
            return null;
        }
    }


    @DeleteMapping("/order/{id}")
    public void deleteOrder(@PathVariable("id") final Long id) {
        orderService.deleteOrder(id);
    }


}

