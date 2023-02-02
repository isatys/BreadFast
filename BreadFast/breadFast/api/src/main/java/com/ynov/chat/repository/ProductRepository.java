package com.ynov.chat.repository;

import com.ynov.chat.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
