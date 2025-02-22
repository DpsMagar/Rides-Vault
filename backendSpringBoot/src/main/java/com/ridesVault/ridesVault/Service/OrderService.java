package com.ridesVault.ridesVault.Service;


import com.ridesVault.ridesVault.Models.Order;
import com.ridesVault.ridesVault.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;
    public Object addOrder(Order order) {
        return ResponseEntity.ok(orderRepo.save(order));
    }
}
