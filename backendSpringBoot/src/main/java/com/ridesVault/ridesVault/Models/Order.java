package com.ridesVault.ridesVault.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name = "orders")
@Setter
@Getter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(unique = true, nullable = false)
    private String orderNumber;

    @Column(nullable = true, precision = 10, scale = 2)
    private BigDecimal totalPrice = BigDecimal.ZERO;

    @Column(nullable = false)
    private LocalDateTime orderedAt = LocalDateTime.now();

    @Column(nullable = false)
    private Boolean isProcessed = false;

    @ManyToMany
    @JoinTable(
            name = "order_items",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id")
    )
//    @JsonIgnore
    private List<Items> items;



    @PrePersist
    @PreUpdate
    private void prePersistAction() {
        if (this.orderNumber == null || this.orderNumber.isEmpty()) {
            this.orderNumber = "ORD-" + UUID.randomUUID().toString();
        }
    }


}
