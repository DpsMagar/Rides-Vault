package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Models.Order;
import com.ridesVault.ridesVault.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Object> addOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.addOrder(order));
    }
}
