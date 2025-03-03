package com.ridesVault.ridesVault.Models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "pant")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private String brand;

    @Column(length = 50)
    private String size;

    @Column(length = 50)
    private String color;

    @Column
    private Integer price = 0;

    @Column
    private String imageLink;

    @Column(name = "stock_quantity")
    private Integer stockQuantity;

    @Column
    private String image_name;
    private String image_path;
    private String image_type;

    }
