package com.ynov.chat.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Data
@Table(name = "roles")
@Entity
public class Roles implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name_role;

}
