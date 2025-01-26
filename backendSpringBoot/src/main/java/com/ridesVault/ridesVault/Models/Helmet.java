package com.ridesVault.ridesVault.Models;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "helmets")
@Data
public class Helmet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = true)
    private String name;

    @Column(length = 100, nullable = false)
    private String brand;

    @Column(length = 50, nullable = false)
    private String size;

    @Column(length = 50, nullable = false)
    private String color;

    @Column(nullable = false)
    private Integer price = 0;

    @Column(length = 50, nullable = false)
    private String safetyRating;

    @Column(nullable = false)
    private Integer stockQuantity;

    @Lob
    @Column(name = "image", nullable = true)
    private byte[] image;

    @Override
    public String toString() {
        return this.brand + " Helmet (" + this.size + ")";
    }
}