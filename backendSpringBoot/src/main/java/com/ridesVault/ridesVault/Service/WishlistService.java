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

@Service
public class WishlistService {
    @Autowired
    private WishlistRepo wishlistRepo;

    @Autowired
    private UserRepo userRepo;

//    long userId= JwtUtil.extractUserId()
    public Wishlist postWishlist(Wishlist wishlist) {
//        User user= userRepo.findById(wishlist)
//                .orElseThrow(()->new RuntimeException("User Not Found"));
       return wishlistRepo.save(wishlist);
    }
//    Wishlist existingWishlist= wishlistRepo.findByName(wishlist.getName());

    public List<Wishlist> getWishlists(Long id) {
        return wishlistRepo.findByUserId(id);
    }

}
