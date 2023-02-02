package com.ynov.chat.service;

import com.ynov.chat.model.Product;
import com.ynov.chat.repository.CategoryRepository;
import com.ynov.chat.repository.ProductRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Optional<Product> getProduct(final Long id) {
        return categoryRepository.findById(id);
    }

    public Iterable<Product> getProducts() {
        return categoryRepository.findAll();
    }

}
