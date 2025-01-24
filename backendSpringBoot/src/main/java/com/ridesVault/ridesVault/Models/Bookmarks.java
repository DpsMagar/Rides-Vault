package com.ridesVault.ridesVault.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data

public class Bookmarks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false, length = 50)
    private String itemType;

    @Column(nullable = false)
    private Long itemId;

    @Column(nullable = false)
    private LocalDateTime bookmarkedAt = LocalDateTime.now();

    @Column
    private String image;

    // Getters and Setters
}
