package com.ridesVault.ridesVault.Service;

import com.ridesVault.ridesVault.Models.Role;
import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.UserRepo;
import com.ridesVault.ridesVault.Util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepo userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public String register(User user) {
        // Encode the password and set the role before saving the user
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER); // Assuming role is USER by default

        // Save the user
        userRepository.save(user);

        // Generate and return the JWT token
        return jwtUtil.generateToken(user.getEmail());  // This is fine, you're returning the JWT to the frontend
    }


    public Optional<String> authenticate(String email, String password) {
        return userRepository.findByEmail(email)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()))
                .map(user -> jwtUtil.generateToken(email));  // return JWT token
    }

}