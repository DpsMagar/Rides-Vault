package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Models.Helmet;
import com.ridesVault.ridesVault.Service.HelmetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/helmet")
public class HelmetController {
    @Autowired
    private HelmetService helmetService;

    @PostMapping
    public ResponseEntity<Helmet> addHelmet(
            @RequestParam("name") String name,
            @RequestParam("brand") String brand,
            @RequestParam("size") String size,
            @RequestParam("color") String color,
            @RequestParam("safetyRating") String safetyRating,
//            @RequestParam("image_name") String image_name,
//            @RequestParam("image_type") String image_type,
//            @RequestParam("image_path") String image_path,
            @RequestParam("price") Integer price,
            @RequestParam("stockQuantity") Integer stockQuantity,
            @RequestParam("image") MultipartFile file) throws IOException {
                        return ResponseEntity.ok(helmetService.addHelmet(name, brand, size, color, safetyRating,price, stockQuantity, file));
    }


    @GetMapping
    public ResponseEntity<List<Helmet>> getAllHelmets() {
        return ResponseEntity.ok(helmetService.getAllHelmets());
    }

    @GetMapping("/{key}")
    public ResponseEntity<Optional<Helmet>> getHelmetByKey(@PathVariable Long key) {
        return ResponseEntity.ok(helmetService.getHelmetsByKey(key));
    }


}


