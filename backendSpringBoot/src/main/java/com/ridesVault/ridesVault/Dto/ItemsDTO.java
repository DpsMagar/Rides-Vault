package com.ridesVault.ridesVault.Dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class ItemsDTO {
    private Long userId;
    private String name;
    private Integer quantity;
    private String itemType;
    private Integer price;
    private String image;
    private LocalDate addedAt;
    private BigDecimal totalPrice;
    private Boolean isProcessed;
//    private Integer orderId;
}
