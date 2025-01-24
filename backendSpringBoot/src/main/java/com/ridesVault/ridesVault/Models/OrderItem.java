package com.ridesVault.ridesVault.Models;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data

public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Column(nullable = false, length = 40)
    private String name;

    @Column(nullable = false)
    private Integer quantity = 1;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal totalPrice;

    @Column
    private String image;

    // Getters and Setters

    @PrePersist
    @PreUpdate
    public void calculateTotalPrice() {
        this.totalPrice = price.multiply(BigDecimal.valueOf(quantity));
    }
}
