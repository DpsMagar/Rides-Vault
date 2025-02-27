package com.ridesVault.ridesVault.Repository;

import com.ridesVault.ridesVault.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);


}
