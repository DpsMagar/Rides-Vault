package com.ridesVault.ridesVault.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
public class Items {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

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

    @JsonIgnore
    @ManyToMany(mappedBy = "items")
    private List<Order> orders;


    public Items() {

    }

    // Getters and Setters

    @PrePersist
    @PreUpdate
    public void calculateTotalPrice() {
        this.totalPrice = BigDecimal.valueOf(price).multiply(BigDecimal.valueOf(quantity));
    }
}
