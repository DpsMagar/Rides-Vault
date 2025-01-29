package com.ridesVault.ridesVault.Controller;

import com.ridesVault.ridesVault.Models.Glove;
import com.ridesVault.ridesVault.Service.GloveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/glove")
public class GloveController {

    @Autowired
    GloveService gloveService;

    @PostMapping
    private ResponseEntity<Glove> postGlove(@RequestParam("name") String name,
                                            @RequestParam("brand") String brand,
                                            @RequestParam("size") String size,
                                            @RequestParam("color") String color,
                                            @RequestParam("price") Integer price,
                                            @RequestParam("stockQuantity") Integer stockQuantity,
                                            @RequestParam("image")MultipartFile image
                                            ) throws IOException {
        return  ResponseEntity.ok(gloveService.postGlove(name,brand,size, color, price, stockQuantity,image));

    }

    @GetMapping
    private ResponseEntity<List<Glove>> getGlove() {
        return ResponseEntity.ok(gloveService.getAllGloves());
    }

    @GetMapping("/{key}")
    private ResponseEntity<Glove> getGloveByKey(@PathVariable Long key) {
        return ResponseEntity.ok(gloveService.getGloveById(key));
    }
}
