package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Models.Helmet;
import com.ridesVault.ridesVault.Models.Jacket;
import com.ridesVault.ridesVault.Service.HelmetService;
import com.ridesVault.ridesVault.Service.JacketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("/api/jacket")
public class JacketController {
    @Autowired
    private JacketService jacketService;

    @GetMapping
    public ResponseEntity<List<Jacket>> getHelmet(){
        return ResponseEntity.ok(jacketService.getAllJackets());
    }

    @GetMapping("/{key}")
    public ResponseEntity<Optional<Jacket>> getJacket(@PathVariable Long key){
        return ResponseEntity.ok(jacketService.getSingleJacket(key));
    }
}
