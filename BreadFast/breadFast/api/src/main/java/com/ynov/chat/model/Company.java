package com.ynov.chat.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Table(name = "company")
@Entity
public class Company implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String company_name;
    private String address;
    private String city;
    private String logo;
    private String country;
    private Integer user_id;
    private Date createdAt;
    private Byte isDeleted;

}
