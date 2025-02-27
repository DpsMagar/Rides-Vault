package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Models.Order;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.ItemsRepo;
import com.ridesVault.ridesVault.Repository.OrderRepo;
import com.ridesVault.ridesVault.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class OrderItemsCombinedDataService {

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private ItemsRepo itemsRepo;

    @Autowired
    private UserRepo userRepo;

    public Map<String, Object> getWholeData() {
        User authenticatedUser = getAuthenticatedUser();

        Optional<Order> orders = orderRepo.findByUser(authenticatedUser);
        List<Items> items = itemsRepo.findByUser(authenticatedUser);

        Map<String, Object> response = new HashMap<>();
        response.put("orders", orders != null ? orders : List.of()); // Avoid null
        response.put("items", items != null ? items : List.of()); // Avoid null

        return response;
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
}
