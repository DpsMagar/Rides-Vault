package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Models.Items;
import com.ridesVault.ridesVault.Models.Order;
import com.ridesVault.ridesVault.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/user/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Object> addOrder(@RequestBody Map<String, Object> request) {
        Long userId = Long.valueOf(request.get("userId").toString());
        List<Long> itemIds = (List<Long>) request.get("items");
        BigDecimal totalPrice = new BigDecimal(request.get("totalPrice").toString());

        return ResponseEntity.ok(orderService.addOrder(userId, itemIds, totalPrice));
    }
    @GetMapping

    public ResponseEntity<Object> getOrders() {
        return ResponseEntity.ok(orderService.getOrders());

    }
}
