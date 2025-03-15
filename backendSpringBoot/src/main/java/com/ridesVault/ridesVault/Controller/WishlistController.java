package com.ridesVault.ridesVault.Controller;

import com.ridesVault.ridesVault.Models.Wishlist;
import com.ridesVault.ridesVault.Service.WishlistService;
import com.ridesVault.ridesVault.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user/wishlist")
public class WishlistController {
    @Autowired
    private WishlistService wishlistService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping
    public ResponseEntity<?> addWishlist(@RequestBody Wishlist wishlist) {
//        System.out.println("hi");
//        System.out.println("the id of the current user is:" +wishlist.getUser().getId());
        return ResponseEntity.ok(wishlistService.postWishlist(wishlist));
    }

    @GetMapping
    public ResponseEntity<?> getAllWishlist(@RequestHeader("Authorization") String token) {
        System.out.println(token);
        try {
            if (!token.startsWith("Bearer ")) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token format");
            }
            String jwt= token.substring(7);
            Long userId= jwtUtil.extractUserId(jwt);
            System.out.println("-----------------------------------");
            System.out.println(userId);

            return ResponseEntity.ok(wishlistService.getWishlists(userId));
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token format");
        }
    }
    @DeleteMapping("/{userId}/{itemId}")
    public void deleteWishlist(@PathVariable Long userId, @PathVariable Integer itemId) {
        System.out.println(userId + itemId);
         wishlistService.deleteWishlist(userId, itemId);
    };

}
