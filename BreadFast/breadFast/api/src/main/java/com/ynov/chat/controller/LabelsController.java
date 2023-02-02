package com.ynov.chat.controller;

import com.ynov.chat.model.Labels;
import com.ynov.chat.model.Product;
import com.ynov.chat.repository.LabelsRepository;
import com.ynov.chat.service.LabelsService;
import com.ynov.chat.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



// access doc swagger http://localhost:9000/swagger-ui.html#/user-controller
@RestController
@Api
public class LabelsController {

    @Autowired
    private LabelsService labelsService;
    private final LabelsRepository labelsRepository;
    private final UserService userService;


    public LabelsController(LabelsRepository labelsRepository, UserService userService) {
        this.labelsRepository = labelsRepository;
        this.userService = userService;
    }

    @GetMapping("/label/{id}")
    public Labels getProduct(@PathVariable("id") final Long id) {
        Optional<Labels> user = labelsService.getLabels(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @GetMapping("/labels")
    public Iterable<Labels> getLabels() {
        return labelsService.getLabels();
    }
}