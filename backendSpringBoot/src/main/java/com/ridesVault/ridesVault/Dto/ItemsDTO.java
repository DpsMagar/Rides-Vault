package com.ridesVault.ridesVault.Dto;

import com.ridesVault.ridesVault.Models.Items;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemsDTO {
    private Long id;
    private Long userId;
    private String name;
    private Integer quantity;
    private String itemType;
    private Integer price;
    private String image;
    private LocalDate addedAt;
    private BigDecimal totalPrice;
    private Boolean isProcessed;
    private Integer itemId;
    private String imageLink;

    public ItemsDTO(Items item) {
        if (item != null) {
            this.id=item.getId();
            this.userId = (item.getUser() != null) ? item.getUser().getId() : null;
            this.name = item.getName();
            this.quantity = item.getQuantity();
            this.itemType = item.getItemType();
            this.price = item.getPrice();
            this.image = item.getImage();
            this.addedAt = item.getAddedAt();
            this.totalPrice = item.getTotalPrice();
            this.isProcessed = item.getIsProcessed();
            this.itemId = item.getItemId();
            this.imageLink = item.getImageLink();
        }
    }
//    private Integer orderId;
}
