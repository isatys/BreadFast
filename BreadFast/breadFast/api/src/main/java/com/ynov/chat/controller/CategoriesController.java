package com.ynov.chat.controller;

import com.ynov.chat.model.Product;
import com.ynov.chat.repository.CategoryRepository;
import com.ynov.chat.repository.UserRepository;
import com.ynov.chat.service.CategoryService;
import com.ynov.chat.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



// access doc swagger http://localhost:9000/swagger-ui.html#/user-controller
@RestController
@Api
public class CategoriesController {

    @Autowired
    private CategoryService categoryService;
    private final CategoryRepository categoryRepository;
    private final UserService userService;


    public CategoriesController(CategoryRepository categoryRepository, UserService userService) {
        this.categoryRepository = categoryRepository;
        this.userService = userService;
    }

    @GetMapping("/category/{id}")
    public Product getProduct(@PathVariable("id") final Long id) {
        Optional<Product> user = categoryService.getProduct(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @GetMapping("/categories")
    public Iterable<Product> getProducts() {
        return categoryService.getProducts();
    }
}