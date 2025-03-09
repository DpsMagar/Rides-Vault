package com.ridesVault.ridesVault.Controller;

import com.ridesVault.ridesVault.Dto.AuthResponseDTO;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/auth")
@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    @Autowired
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        String token = authService.register(user);
        return ResponseEntity.ok(token);
    }

    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        public ResponseEntity<?> login(@RequestBody User user) {
//        AuthResponseDTO authResponse = authService.authenticate(credentials.get("email"), credentials.get("password"))
        AuthResponseDTO authResponse = authService.authenticate(user)
                .orElse(null);

        if (authResponse != null) {
            return ResponseEntity.ok(authResponse);
        } else {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }
    }
}
