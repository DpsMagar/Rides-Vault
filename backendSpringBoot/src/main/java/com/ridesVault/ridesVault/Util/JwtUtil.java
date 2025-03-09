package com.ridesVault.ridesVault.Util;

import com.ridesVault.ridesVault.Models.User;
import com.ridesVault.ridesVault.Repository.UserRepo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

@Component
public class JwtUtil {
    @Autowired
    private UserRepo userRepo;

    // Generate a secure 256-bit key for HS256 signing
    private final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Extract username (email) from the JWT
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Extract userId from the token
    public Long extractUserId(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("id", Long.class);
    }

    // Extract expiration date from the JWT
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Extract any claim from the JWT
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Parse all claims from the JWT
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY) // Use the securely generated key
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    // Check if the token is expired
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Validate the token by checking the username and expiration
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    // Generate a JWT token for a given user email
    public String generateToken(User user) {
        Optional<User> currentUser= userRepo.findByEmail(user.getEmail());
        System.out.println(user);
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("id", currentUser.get().getId())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours expiration
                .signWith(SECRET_KEY)  // Sign with the securely generated key
                .compact();
    }

    // Create token with additional claims (if needed)
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
                .signWith(SECRET_KEY)
                .compact();
    }
}
