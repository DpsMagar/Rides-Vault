package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Service.OrderItemsCombinedDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
//@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/user/whole-data")
public class OrderItemsCombinedDataController {

    @Autowired
    private OrderItemsCombinedDataService orderItemsCombinedDataService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getWholeData(){
        return ResponseEntity.ok(orderItemsCombinedDataService.getWholeData());
    }
}
