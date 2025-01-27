package com.ridesVault.ridesVault.Controller;


import com.ridesVault.ridesVault.Models.Helmet;
import com.ridesVault.ridesVault.Service.HelmetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
