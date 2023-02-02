package com.ynov.chat.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Table(name = "order")
@Entity
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer product_id;
    private Integer quantity;
    private Float total_price;
    private Integer order_id;
    private String item_order;
    private Date createDate;

}
