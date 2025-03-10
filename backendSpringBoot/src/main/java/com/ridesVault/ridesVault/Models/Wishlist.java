package com.ridesVault.ridesVault.Models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.core.SpringVersion;

@Entity
@Data
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String price;
    private Integer itemId;
    private String imageLink;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}


