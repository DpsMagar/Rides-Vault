package com.ridesVault.ridesVault.Controller;

import com.ridesVault.ridesVault.Models.Wishlist;
import com.ridesVault.ridesVault.Service.WishlistService;
import com.ridesVault.ridesVault.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user/wishlist")
public class WishlistController {
    @Autowired
    private WishlistService wishlistService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    public ResponseEntity<?> addWishlist(Wishlist wishlist) {
        return ResponseEntity.ok(wishlistService.postWishlist(wishlist));
    }

    @GetMapping
    public ResponseEntity<?> getAllWishlist(@RequestHeader("Authorization") String token) {
        try {
            if (!token.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token format");
            }
            String jwt= token.substring(7);
            Long userId= jwtUtil.extractUserId(jwt);

            return ResponseEntity.ok(wishlistService.getWishlists(userId));
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token format");
        }
    }
}
