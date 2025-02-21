package com.ridesVault.ridesVault.Dto;

import lombok.Data;

@Data
public class CartDTO {
    private Long userId;
    private String name;
    private Integer quantity;
    private String itemType;
    private Integer price;
    private String image;
}
