package com.ynov.chat.repository;

import com.ynov.chat.model.Product;
import com.ynov.chat.model.Stock;
import org.springframework.data.repository.CrudRepository;

public interface StockRepository extends CrudRepository<Stock, Long> {
}
