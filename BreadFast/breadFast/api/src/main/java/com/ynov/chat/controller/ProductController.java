package com.ynov.chat.controller;

import com.ynov.chat.model.Product;
import com.ynov.chat.model.User;
import com.ynov.chat.repository.UserRepository;
import com.ynov.chat.service.ProductService;
import com.ynov.chat.service.UserService;
import com.ynov.chat.utils.UserNotFoundException;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



// access doc swagger http://localhost:9000/swagger-ui.html#/user-controller
@RestController
@Api
public class ProductController {

    @Autowired
    private ProductService productService;
    private final UserRepository userRepository;
    private final UserService userService;

    public ProductController(UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable("id") final Long id) {
        Optional<Product> user = productService.getProduct(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @GetMapping("/products")
    public Iterable<Product> getProducts() {
        return productService.getProducts();
    }
}

// get by all et catgories