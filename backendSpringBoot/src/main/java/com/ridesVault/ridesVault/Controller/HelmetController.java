package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Models.Helmet;
import com.ridesVault.ridesVault.Service.HelmetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/helmet")
public class HelmetController {
    @Autowired
    private HelmetService helmetService;

    @GetMapping
    public ResponseEntity<List<Helmet>> getAllHelmets() {
        return ResponseEntity.ok(helmetService.getAllHelmets());
    }

    @GetMapping("/{key}")
    public ResponseEntity<Optional<Helmet>> getHelmetByKey(@PathVariable Long key) {
        return ResponseEntity.ok(helmetService.getHelmetsByKey(key));
    }
}


