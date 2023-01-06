package com.ynov.chat.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Table(name = "messages")
@Entity
public class Message implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;

}