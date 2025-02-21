package com.ridesVault.ridesVault.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponseDTO {
    private String token;
    private Long userId;
}
