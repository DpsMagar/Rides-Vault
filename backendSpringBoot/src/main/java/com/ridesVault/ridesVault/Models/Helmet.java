package com.ridesVault.ridesVault.Models;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class Helmet {

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

    @Column
    private String safetyRating;

    @Column
    private String image;

    // Getters and Setters
}
