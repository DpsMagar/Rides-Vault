package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Models.Pant;
import com.ridesVault.ridesVault.Service.PantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping("/api/pant")
public class PantController {

    @Autowired
       private PantService pantService;

    @GetMapping
    private ResponseEntity<List<Pant>> getAllHelmet() {
        return ResponseEntity.ok(pantService.getAllPants());
    }

    @GetMapping("/{key}")

    private ResponseEntity<Optional<Pant>> getSinglePant(@PathVariable Long key) {
        return ResponseEntity.ok(pantService.getSinglePant(key));
    }
}
