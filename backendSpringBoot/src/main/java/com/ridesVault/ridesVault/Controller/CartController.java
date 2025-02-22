package com.ridesVault.ridesVault.Controller;

import com.ridesVault.ridesVault.Dto.CartDTO;
import com.ridesVault.ridesVault.Service.CartService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user/carts")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public ResponseEntity<?> addCart(@RequestBody CartDTO cartDTO) {
        return ResponseEntity.ok(cartService.addCart(cartDTO));
    }

    @GetMapping
    public ResponseEntity<?> getAllCarts() {
        return ResponseEntity.ok(cartService.getCarts());
    }

    @DeleteMapping("/{key}")
    public void deleteCart(@PathVariable Long key) {
         cartService.deleteCart(key);
    }
}
