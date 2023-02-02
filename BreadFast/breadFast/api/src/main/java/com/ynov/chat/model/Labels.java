package com.ynov.chat.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Table(name = "labels")
@Entity
public class Labels implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String label_name;
    private String description;
    private String color;
    private String product_name;
    private Byte isDeleted;

}
