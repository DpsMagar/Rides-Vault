package com.ridesVault.ridesVault.Service;


import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Models.Wishlist;
import com.ridesVault.ridesVault.Repository.UserRepo;
import com.ridesVault.ridesVault.Repository.WishlistRepo;
import com.ridesVault.ridesVault.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishlistService {
    @Autowired
    private WishlistRepo wishlistRepo;

    @Autowired
    private UserRepo userRepo;
    public Wishlist postWishlist(Wishlist wishlist) {
        Optional<Wishlist> existingWishlist= wishlistRepo.findByUserIdAndItemId(wishlist.getUser().getId(), wishlist.getItemId());
        return existingWishlist.orElseGet(() -> wishlistRepo.save(wishlist));
    }

    public List<Wishlist> getWishlists(Long id) {
        return wishlistRepo.findByUserId(id);
    }

    public void deleteWishlist(Long userId, Integer itemId) {
        Optional<Wishlist> existingWishlist= wishlistRepo.findByUserIdAndItemId(userId, itemId);
        if (existingWishlist.isPresent()) {
            wishlistRepo.delete(existingWishlist.get());
        }
        else {
            System.out.println("Wishlist not found");
        }
    }
}
