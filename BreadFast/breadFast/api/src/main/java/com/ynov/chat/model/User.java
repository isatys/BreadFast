package com.ynov.chat.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Table(name = "user")
@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String lastname;
    private String name_role;
    private String firstname;
    private String email;
    private String password;
    private Integer phone;
    private String company_name;
    private Date createdAt;
    private Boolean isdeleted;

}
