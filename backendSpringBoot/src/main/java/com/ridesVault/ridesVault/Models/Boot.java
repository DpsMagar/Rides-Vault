package com.ridesVault.ridesVault.Models;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class Boot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String brand;

    @Column(nullable = false, length = 50)
    private String size;

    @Column(nullable = false, length = 50)
    private String color;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private Integer stockQuantity;

    @Column(nullable = false)
    private Boolean waterproof = false;

    @Column
    private String image;

    @Column
    private String imageLink;

    // Getters and Setters
}
