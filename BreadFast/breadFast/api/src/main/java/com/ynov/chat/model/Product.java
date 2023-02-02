package com.ynov.chat.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.text.DecimalFormat;
import java.util.Date;

@Data
@Table(name = "products")
@Entity
public class Product implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer user_id;
    private String product_name ;
    private String image ;
    private Date createdAt;
    private Double price;
    private String category_name;
    private String label_name;
    private String description;
    private Byte isDeleted;

}