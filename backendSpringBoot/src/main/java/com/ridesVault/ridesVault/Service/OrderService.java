package com.ridesVault.ridesVault.Service;


import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Models.Order;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.ItemsRepo;
import com.ridesVault.ridesVault.Repository.OrderRepo;
import com.ridesVault.ridesVault.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ItemsRepo itemsRepo;

    public ResponseEntity<?> addOrder(Long userId, List<Long> itemIds, BigDecimal totalPrice) {
        // Fetch user and validate
        User user = userRepo.findById(userId).orElse(null);
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid user ID");
        }

        // Extract item IDs and fetch items from DB
//        List<Long> itemIds1 =itemIds.stream().map(Items::getId).toList();
        List<Items> items1 = itemsRepo.findAllById(itemIds);
        if (itemIds.isEmpty()) {
            return ResponseEntity.badRequest().body("No valid items found");
        }

        Order order = new Order();
        order.setUser(user);
        order.setItems(items1);
        order.setTotalPrice(totalPrice);


        return ResponseEntity.ok(orderRepo.save(order));
    }

    private User getAuthenticatedUser() {
        String username= getLoggedInUser().split("Username=")[1].split(",")[0];

        return userRepo.findByEmail(username)
                .orElseThrow(()-> new RuntimeException("User not found"));

    }
    private String getLoggedInUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return (principal instanceof User)?((User) principal).getEmail(): principal.toString();
    }

    public Object getOrders() {
        return orderRepo.findByUser(getAuthenticatedUser());
    }
}
