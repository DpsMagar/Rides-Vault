package com.ridesVault.ridesVault.Service;


import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Models.Wishlist;
import com.ridesVault.ridesVault.Repository.UserRepo;
import com.ridesVault.ridesVault.Repository.WishlistRepo;
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
    public Wishlist postWishlist(Wishlist wishlist) {
       return wishlistRepo.save(wishlist);
    }

//    public List<Wishlist> getWishlists() {
//        return wishlistRepo.findBY;
//    }

    private User getAuthenticatedUser(){
        System.out.println("Extracted Email: " + getLoggedInUsername());
        String username = getLoggedInUsername().split("Username=")[1].split(",")[0];


        return userRepo.findByEmail(username)
                .orElseThrow(()->new RuntimeException("User not found!!"));
    }

    private  String getLoggedInUsername(){
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return (principal instanceof User) ? ((User) principal).getEmail() : principal.toString();
    }
}
