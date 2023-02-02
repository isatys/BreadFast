package com.ynov.chat.repository;

import com.ynov.chat.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Product, Long> {
}
