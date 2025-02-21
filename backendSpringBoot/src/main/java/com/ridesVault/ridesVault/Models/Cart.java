package com.ridesVault.ridesVault.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer user_id;

    @Column(nullable = false, length = 40)
    private String name;

    @Column(nullable = false)
    private Integer quantity = 1;

    @Column(nullable = false, length = 50)
    private String itemType;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private LocalDate addedAt = LocalDate.now();

    @Column(nullable = false)
    private BigDecimal totalPrice;

    @Column
    private String image;

    @Column(nullable = false)
    private Boolean isProcessed = false;

    public Cart() {

    }

    // Getters and Setters

    @PrePersist
    @PreUpdate
    public void calculateTotalPrice() {
        this.totalPrice = BigDecimal.valueOf(price).multiply(BigDecimal.valueOf(quantity));
    }
}
