package com.ridesVault.ridesVault.Controller;

import com.ridesVault.ridesVault.Models.Wishlist;
import com.ridesVault.ridesVault.Service.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("user/wishlist")
public class WishlistController {
    @Autowired
    private WishlistService wishlistService;

    @PostMapping
    public ResponseEntity<?> addWishlist(Wishlist wishlist) {
        return ResponseEntity.ok(wishlistService.postWishlist(wishlist));
    }
}
