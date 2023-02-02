package com.ynov.chat.service;

import com.ynov.chat.model.Stock;
import com.ynov.chat.model.User;
import com.ynov.chat.repository.StockRepository;
import com.ynov.chat.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Data
@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public Optional<Stock> getStock(final Long id) {
        return stockRepository.findById(id);
    }

    public Stock saveStock(Stock stock) {
        Stock savedStock = stockRepository.save(stock);
        return savedStock;
    }

}