package com.ynov.chat.controller;


import com.ynov.chat.model.Stock;
import com.ynov.chat.model.User;
import com.ynov.chat.service.StockService;
import com.ynov.chat.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;



@RestController
@Api
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping("/stocks")
    public Stock createStock(@RequestBody Stock stock) {
        return stockService.saveStock(stock);
    }



    @PutMapping("/stocks/{id}")
    public Stock updateStock(@PathVariable("id") final Long id, @RequestBody Stock stock) {
        Optional<Stock> e = stockService.getStock(id);
        if(e.isPresent()) {
            Stock currentStock = e.get();


            stockService.saveStock(currentStock);
            return currentStock;
        } else {
            return null;
        }
    }

}
