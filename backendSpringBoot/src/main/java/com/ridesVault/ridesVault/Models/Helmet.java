package com.ridesVault.ridesVault.Models;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "helmets")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Helmet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 500, nullable = true)
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

//    @Lob
    @Column(name = "image_name", nullable = true)
    private String image_name;





    @Override
    public String toString() {
        return this.brand + " Helmet (" + this.size + ")";
    }
}