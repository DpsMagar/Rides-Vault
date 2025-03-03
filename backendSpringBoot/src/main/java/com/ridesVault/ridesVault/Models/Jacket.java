package com.ridesVault.ridesVault.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Jacket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String brand;
    private String size;
    private String color;
    private int price;
    private int stockQuantity;


    private String image_name;
    private String image_type;
    private String image_path;
    private String imageLink;

    @Override
    public String toString() {
        return brand + " Jacket (" + size + ")";
    }
}
